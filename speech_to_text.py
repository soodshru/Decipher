import os

# Imports the Google Cloud client library
from google.cloud import speech
from google.cloud.speech_v1.types.cloud_speech import SpeechRecognitionAlternative

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = '/path/to/json'

# Instantiates a client
client = speech.SpeechClient()

# Set this to your mp3 file
media_file = '/path/to/mp3'

# Reading byte stream from audio file
with open(media_file, 'rb') as open_file:
    byte_data = open_file.read()

audio_mp3 = speech.RecognitionAudio(content=byte_data);

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

print(response)
