from flask import Flask, render_template
from openAI import chat_with_jones, chat_with_brown
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("chat.html")

@app.route("/brown")
def brown_chatbot():
    return chat_with_brown("Who are you?")

@app.route("/jones")
def jones_chatbot():
    return chat_with_jones("Who are you?")

if __name__ == "__main__":
    app.run(debug=True)

