from flask import Flask, send_from_directory,abort, request
from src.text2speech import text2speech
app = Flask(__name__)

@app.route("/")
def hello():
    return "hello"

@app.route("/texttospeech", methods = ['GET', "POST"])
def get_image():
    if request.method == 'POST':
        try:
            filename = "output.mp3"
            output_path = "output"
            input = request.form.get("input")
            text2speech.gen_speech(input, f"{output_path}/{filename}")
            return send_from_directory(output_path, filename, as_attachment=True)
        except FileNotFoundError:
            abort(404)

    return "hi"

@app.route("/speech2text", methods = ['GET', "POST"])
def get_image():
    # if request.method == 'POST':
        # try:
            # implement here
        # except FileNotFoundError:
        #     abort(404)

    return "hi"