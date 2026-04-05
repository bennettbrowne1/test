"""
Qwen3-TTS inference script with voice cloning support.

Basic synthesis:
    python run_qwen3_tts.py "Hello, world!" -o output.wav

Voice cloning (zero-shot):
    python run_qwen3_tts.py "Hello, world!" \\
        --ref-audio reference.wav \\
        --ref-text "The exact words spoken in the reference clip." \\
        -o output.wav

Local model:
    python run_qwen3_tts.py "Hello, world!" --model /path/to/Qwen3-TTS -o output.wav

Notes:
- Reference audio should be 3–30 seconds of clean, single-speaker speech.
- --ref-text must match what is spoken in the reference audio exactly.
- Without a GPU this will be slow (CPU inference).
"""

import argparse
import sys

import numpy as np
import soundfile as sf
import torch
from transformers import AutoModelForTextToWaveform, AutoProcessor, pipeline


def load_ref_audio(path: str, target_sr: int = 16000):
    """Load reference audio, resample to target_sr if needed."""
    import librosa
    audio, sr = librosa.load(path, sr=target_sr, mono=True)
    return audio, target_sr


def run_tts(
    text: str,
    model_id: str,
    output_path: str,
    ref_audio_path: str | None = None,
    ref_text: str | None = None,
):
    device = "cuda" if torch.cuda.is_available() else "cpu"
    dtype = torch.float16 if device == "cuda" else torch.float32
    print(f"Device: {device}  |  Model: {model_id}")

    if ref_audio_path:
        # Voice cloning: load processor + model directly for full control
        processor = AutoProcessor.from_pretrained(model_id)
        model = AutoModelForTextToWaveform.from_pretrained(
            model_id, torch_dtype=dtype
        ).to(device)

        ref_audio, ref_sr = load_ref_audio(ref_audio_path)
        print(f"Reference audio: {ref_audio_path}  ({len(ref_audio)/ref_sr:.1f}s)")

        inputs = processor(
            text=text,
            reference_audio=ref_audio,
            reference_sampling_rate=ref_sr,
            reference_text=ref_text,
            return_tensors="pt",
        ).to(device)

        print(f"Generating cloned speech for: {text!r}")
        with torch.no_grad():
            output = model.generate(**inputs)

        # output shape: (batch, samples) or (samples,)
        audio = output.squeeze().cpu().numpy().astype(np.float32)
        sampling_rate = processor.feature_extractor.sampling_rate
    else:
        # Standard synthesis via pipeline
        pipe = pipeline(
            "text-to-audio",
            model=model_id,
            device=device,
            torch_dtype=dtype,
        )
        print(f"Generating speech for: {text!r}")
        result = pipe(text)
        audio = result["audio"].squeeze()
        sampling_rate = result["sampling_rate"]

    sf.write(output_path, audio, sampling_rate)
    print(f"Saved: {output_path}  ({len(audio)/sampling_rate:.1f}s @ {sampling_rate} Hz)")


def main():
    parser = argparse.ArgumentParser(
        description="Qwen3-TTS — synthesis and zero-shot voice cloning",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("text", help="Text to synthesize")
    parser.add_argument(
        "--model",
        default="Qwen/Qwen3-TTS",
        help="HuggingFace model ID or local path (default: Qwen/Qwen3-TTS)",
    )
    parser.add_argument(
        "-o", "--output",
        default="output.wav",
        help="Output WAV file (default: output.wav)",
    )
    parser.add_argument(
        "--ref-audio",
        metavar="FILE",
        help="Reference audio file for voice cloning (WAV/MP3/etc., 3–30 seconds)",
    )
    parser.add_argument(
        "--ref-text",
        metavar="TEXT",
        help="Transcript of the reference audio (required when --ref-audio is given)",
    )
    args = parser.parse_args()

    if args.ref_audio and not args.ref_text:
        parser.error("--ref-text is required when --ref-audio is provided")

    try:
        run_tts(
            text=args.text,
            model_id=args.model,
            output_path=args.output,
            ref_audio_path=args.ref_audio,
            ref_text=args.ref_text,
        )
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
