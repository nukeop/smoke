from threading import Thread

from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit

from smokeserver.resolver import Resolver
from smokeserver.steambackend.SteamUserManager import SteamUserManager


app = Flask(__name__)
socketio = SocketIO(app)

resolver = Resolver()
users = SteamUserManager()

@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('json')
def handle_json(json):
    handler_thread = Thread(resolver.on_json(json))
    handler_thread.daemon = True


@socketio.on('connect')
def handle_connect():
    print('client connected: {}'.format(request.sid))
