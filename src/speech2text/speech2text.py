import os

# Imports the Google Cloud client library
from google.cloud import speech

def gen_text(mp3_path):
    #os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = "/home/abhishek/text-to-speech-329203-c2a0cf1d09e2.json"

    # Instantiates a client
    client = speech.SpeechClient()

    # Reading byte stream from audio file
    with open(mp3_path, 'rb') as open_file:
        byte_data = open_file.read()

    audio_mp3 = speech.RecognitionAudio(content=byte_data)

    # Configure media files output
    config_mp3 = speech.RecognitionConfig(
        sample_rate_hertz=48000,
        enable_automatic_punctuation=True,
        language_code='en-US'
    )

    # Transcribing RecognitionAudio object
    response = client.recognize(
        config=config_mp3,
        audio=audio_mp3
    )

    print(response.results[0].alternatives[0].transcript)
    return response.results[0].alternatives[0].transcript
