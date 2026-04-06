"""
HTTP server for Qwen3-TTS voice cloning with audio file upload.

Usage:
    python upload_server.py [--model Qwen/Qwen3-TTS] [--host 0.0.0.0] [--port 8000]

Upload endpoint:
    POST /clone
    Form fields:
        text        (required)  Text to synthesize
        ref_text    (required)  Transcript of the reference audio
        ref_audio   (required)  Audio file (WAV/MP3/FLAC/OGG, 3-30 seconds)

    Returns: audio/wav binary

Example with curl:
    curl -X POST http://localhost:8000/clone \\
        -F "text=Hello from a cloned voice!" \\
        -F "ref_text=The words spoken in the reference clip." \\
        -F "ref_audio=@reference.wav" \\
        --output cloned_output.wav
"""

import argparse
import io
import tempfile
from pathlib import Path

import numpy as np
import soundfile as sf
import torch
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.responses import Response
from transformers import AutoModelForTextToWaveform, AutoProcessor

ALLOWED_SUFFIXES = {".wav", ".mp3", ".flac", ".ogg", ".m4a", ".aac"}

app = FastAPI(title="Qwen3-TTS Voice Cloning Upload Server")

# Module-level model cache so they're loaded once on first request
_processor = None
_model = None
_model_id = None
_device = None
_dtype = None


def get_model(model_id: str):
    global _processor, _model, _model_id, _device, _dtype
    if _model is None or _model_id != model_id:
        _device = "cuda" if torch.cuda.is_available() else "cpu"
        _dtype = torch.float16 if _device == "cuda" else torch.float32
        print(f"Loading model {model_id!r} on {_device}…")
        _processor = AutoProcessor.from_pretrained(model_id)
        _model = AutoModelForTextToWaveform.from_pretrained(
            model_id, torch_dtype=_dtype
        ).to(_device)
        _model_id = model_id
        print("Model ready.")
    return _processor, _model, _device, _dtype


def load_audio_bytes(data: bytes, filename: str, target_sr: int = 16000):
    """Load audio from raw bytes, resample to target_sr."""
    import librosa

    suffix = Path(filename).suffix.lower()
    if suffix not in ALLOWED_SUFFIXES:
        raise ValueError(
            f"Unsupported file type {suffix!r}. Allowed: {', '.join(sorted(ALLOWED_SUFFIXES))}"
        )

    with tempfile.NamedTemporaryFile(suffix=suffix, delete=False) as tmp:
        tmp.write(data)
        tmp_path = tmp.name

    audio, sr = librosa.load(tmp_path, sr=target_sr, mono=True)
    Path(tmp_path).unlink(missing_ok=True)

    duration = len(audio) / sr
    if duration < 3:
        raise ValueError(f"Reference audio too short ({duration:.1f}s); minimum 3 seconds.")
    if duration > 30:
        raise ValueError(f"Reference audio too long ({duration:.1f}s); maximum 30 seconds.")

    return audio, sr


@app.post("/clone", response_class=Response)
async def clone_voice(
    text: str = Form(..., description="Text to synthesize"),
    ref_text: str = Form(..., description="Exact transcript of the reference audio"),
    ref_audio: UploadFile = File(..., description="Reference audio file (3–30 seconds)"),
):
    """
    Upload a reference audio file and synthesize speech in that voice.
    Returns a WAV file.
    """
    raw = await ref_audio.read()
    if not raw:
        raise HTTPException(status_code=400, detail="ref_audio file is empty.")

    try:
        audio_array, audio_sr = load_audio_bytes(raw, ref_audio.filename or "upload.wav")
    except ValueError as exc:
        raise HTTPException(status_code=422, detail=str(exc))

    processor, model, device, dtype = get_model(app.state.model_id)

    inputs = processor(
        text=text,
        reference_audio=audio_array,
        reference_sampling_rate=audio_sr,
        reference_text=ref_text,
        return_tensors="pt",
    ).to(device)

    with torch.no_grad():
        output = model.generate(**inputs)

    audio_out = output.squeeze().cpu().numpy().astype(np.float32)
    sampling_rate = processor.feature_extractor.sampling_rate

    buf = io.BytesIO()
    sf.write(buf, audio_out, sampling_rate, format="WAV")
    buf.seek(0)

    return Response(
        content=buf.read(),
        media_type="audio/wav",
        headers={"Content-Disposition": 'attachment; filename="cloned_output.wav"'},
    )


@app.get("/health")
def health():
    return {"status": "ok", "model": app.state.model_id}


def main():
    import uvicorn

    parser = argparse.ArgumentParser(
        description="Qwen3-TTS voice cloning upload server",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument(
        "--model",
        default="Qwen/Qwen3-TTS",
        help="HuggingFace model ID or local path (default: Qwen/Qwen3-TTS)",
    )
    parser.add_argument("--host", default="0.0.0.0", help="Bind host (default: 0.0.0.0)")
    parser.add_argument("--port", type=int, default=8000, help="Bind port (default: 8000)")
    args = parser.parse_args()

    app.state.model_id = args.model
    print(f"Starting server on {args.host}:{args.port}  model={args.model!r}")
    uvicorn.run(app, host=args.host, port=args.port)


if __name__ == "__main__":
    main()
