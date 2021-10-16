from flask import Flask, send_from_directory,abort, request
from flask.json import jsonify
from src.text2speech import text2speech
from src.speech2text import speech2text
app = Flask(__name__)

@app.route("/")
def hello():
    return "hello"

@app.route("/texttospeech", methods = ['GET', "POST"])
def get_speech():
    if request.method == 'POST':
        try:
            filename = "output.wav"
            output_path = "output"
            input = request.form.get("input")
            text2speech.gen_speech(input, f"{output_path}/{filename}")
            return send_from_directory(output_path, filename, as_attachment=True)
        except FileNotFoundError:
            abort(404)

    return "hi"

@app.route("/speechtotext", methods = ['GET', "POST"])
def get_text():
    if request.method == 'POST':
        try:
            data = request.files['file']
            if data.filename != '':
                data.save(data.filename)
            output = speech2text.gen_text(data.filename)
            return output
        except FileNotFoundError:
            abort(404)
            
    return "hi"
