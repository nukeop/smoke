from flask_socketio import send, emit
import smokeserver

class Socket(object):
    def __init__(self, sid):
        self.sid = sid
        self.connected = True


    def emit(self, event, data):
        smokeserver.socketio.emit(event, data, room=self.sid)


    def send_json(self, data):
        smokeserver.socketio.send(data, json=True, room=self.sid)
