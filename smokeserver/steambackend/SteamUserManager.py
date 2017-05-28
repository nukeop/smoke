from smokeserver.receiver import Receiver
from smokeserver.resolver import Resolver
from smokeserver.steambackend.SteamUser import SteamUser

class SteamUserManager(Receiver):
    def __init__(self):
        super(SteamUserManager, self).__init__(Resolver())
        self.users = {}


    def on_json(self, json, sid):
        if self.users.get(sid) is None:
            self.users[sid] = SteamUser(sid)

        self.users[sid].on_json(json, sid)
