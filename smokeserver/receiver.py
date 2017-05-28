class Receiver(object):
    """Defines a common interface for classes that can receive socket messages
    and react to them.
    """
    def __init__(self, resolver):
        self.resolver = resolver
        resolver.receivers.append(self)


    def on_json(self, json, sid):
        pass


    def on_message(self, message, sid):
        pass
