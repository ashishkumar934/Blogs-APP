from flask import Flask
from flask_cors import CORS

app=Flask(__name__)


cors=CORS(app,resources={r"/*":{"origins":"*"}})
@app.route('/v1')
def first_function():
    return "Hello"

@app.route('/v1/how_are_you')
def first_function2():
    return "Hello How are you"

@app.route('/v3')
def first_function3():
    return "Hello How are you doing?"


app.run(debug=False)