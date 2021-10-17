import os
from google.cloud import texttospeech


def gen_speech(input, outputPath, toLang):

    os.environ[
        "GOOGLE_APPLICATION_CREDENTIALS"
    ] = "/Users/josephwang/Code/HackTheValley/src/text2speech/text-to-speech-329203-c963566956db.json"
    # Instantiates a client
    client = texttospeech.TextToSpeechClient()

    # Set the text input to be synthesized
    synthesis_input = texttospeech.SynthesisInput(text=input)

    # Build the voice request, select the language code ("en-US") and the ssml
    # voice gender ("neutral")
    voice = texttospeech.VoiceSelectionParams(
        language_code=toLang, ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )

    # Select the type of audio file you want returned
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.LINEAR16, sample_rate_hertz=48000
    )

    # Perform the text-to-speech request on the text input with the selected
    # voice parameters and audio file type
    response = client.synthesize_speech(
        input=synthesis_input, voice=voice, audio_config=audio_config
    )

    # The response's audio_content is binary.
    with open(outputPath, "wb") as out:
        # Write the response to the output file.
        out.write(response.audio_content)
        print(f"Audio content written to file {outputPath}")
