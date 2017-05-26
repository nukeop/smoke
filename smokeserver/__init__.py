from flask import Flask, render_template

import json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
def hello():
    return json.dumps([1, 2, 5, {'d': 'abc'}])
