import os

# Imports the Google Cloud client library
from google.cloud import speech


def gen_text(wav_path, fromLang):
    os.environ[
        "GOOGLE_APPLICATION_CREDENTIALS"
    ] = os.path.join(os.getcwd(), "src", "speech2text", "text-to-speech-329203-c2a0cf1d09e2.json")

    # Instantiates a client
    client = speech.SpeechClient()

    # Reading byte stream from audio file
    with open(wav_path, "rb") as open_file:
        byte_data = open_file.read()

    audio_wav = speech.RecognitionAudio(content=byte_data)

    # Configure media files output
    config_wav = speech.RecognitionConfig(
        enable_automatic_punctuation=True, language_code=fromLang, audio_channel_count=2
    )

    # Transcribing RecognitionAudio object
    response = client.recognize(config=config_wav, audio=audio_wav)

    result = response.results[0].alternatives[0].transcript
    print(result)
    return result
