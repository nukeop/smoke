from flask import request

class Resolver(object):
    '''Routes actions from frontend received via socket.io to appropriate
    receivers.
    '''
    __shared_state = {}

    def __init__(self):
        self.__dict__ = self.__shared_state
        self.receivers = []


    def on_json(self, json):
        for receiver in self.receivers:
            receiver.on_json(json, request.sid)


    def on_message(self, message):
        for receiver in self.receivers:
            receiver.on_message(message, request.sid)
