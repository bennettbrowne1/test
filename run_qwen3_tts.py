"""
Qwen3-TTS inference script.

Usage:
    python run_qwen3_tts.py "Hello, world!" -o output.wav
    python run_qwen3_tts.py "Hello, world!" --model /path/to/local/model -o output.wav

If no model path is given, defaults to "Qwen/Qwen3-TTS" (requires HuggingFace access).
"""

import argparse
import sys

import soundfile as sf
import torch
from transformers import AutoProcessor, pipeline


def run_tts(text: str, model_id: str, output_path: str, voice: str | None = None):
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"Using device: {device}")
    print(f"Loading model: {model_id}")

    pipe = pipeline(
        "text-to-audio",
        model=model_id,
        device=device,
        torch_dtype=torch.float16 if device == "cuda" else torch.float32,
    )

    print(f"Generating speech for: {text!r}")
    kwargs = {}
    if voice:
        kwargs["forward_params"] = {"voice": voice}

    result = pipe(text, **kwargs)

    audio = result["audio"]
    # audio may be (channels, samples) or (samples,) — normalize to 1D or 2D
    if hasattr(audio, "squeeze"):
        audio = audio.squeeze()

    sampling_rate = result["sampling_rate"]
    sf.write(output_path, audio, sampling_rate)
    print(f"Saved audio to: {output_path}  (sample rate: {sampling_rate} Hz)")


def main():
    parser = argparse.ArgumentParser(description="Run Qwen3-TTS inference")
    parser.add_argument("text", help="Text to synthesize")
    parser.add_argument(
        "--model",
        default="Qwen/Qwen3-TTS",
        help="Model ID or local path (default: Qwen/Qwen3-TTS)",
    )
    parser.add_argument(
        "-o",
        "--output",
        default="output.wav",
        help="Output WAV file path (default: output.wav)",
    )
    parser.add_argument(
        "--voice",
        default=None,
        help="Voice/speaker to use (model-dependent, optional)",
    )
    args = parser.parse_args()

    try:
        run_tts(args.text, args.model, args.output, args.voice)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
