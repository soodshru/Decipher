from flask import Flask, send_from_directory, abort, request
from flask.json import jsonify
from src.text2speech import text2speech
from src.speech2text import speech2text
from src.translate import translate

app = Flask(__name__)


@app.route("/")
def hello():
    return "hello"


@app.route("/texttospeech", methods=["GET", "POST"])
def get_speech():
    if request.method == "POST":
        try:
            filename = "output.wav"
            output_path = "output"
            input = request.form.get("input")
            text2speech.gen_speech(input, f"{output_path}/{filename}")
            return send_from_directory(output_path, filename, as_attachment=True)
        except FileNotFoundError:
            abort(404)

    return "hi"


@app.route("/speechtotext", methods=["GET", "POST"])
def get_text():
    if request.method == "POST":
        try:
            data = request.files["file"]

            if data.filename != "":
                data.save(f"./recordings/{data.filename}")
            output = speech2text.gen_text(f"./recordings/{data.filename}")
            return output
        except FileNotFoundError:
            abort(404)

    return "hi"


@app.route("/speechtospeech", methods=["GET", "POST"])
def get_s2s():
    if request.method == "POST":
        try:
            data = request.files["file"]
            fromLang = request.form.get("fromLang")
            toLang = request.form.get("toLang")

            print(fromLang, toLang)

            if data.filename != "":
                data.save(f"./recordings/{data.filename}")
            output = speech2text.gen_text(f"./recordings/{data.filename}", fromLang)

            input = translate.get_translation(output, fromLang[:2], toLang[:2])

            filename = "output.wav"
            output_path = "output"
            text2speech.gen_speech(input, f"{output_path}/{filename}", toLang)
            return send_from_directory(output_path, filename, as_attachment=True)

        except FileNotFoundError:
            abort(404)

    return "hi"
