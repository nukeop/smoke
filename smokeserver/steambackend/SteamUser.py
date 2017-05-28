import json

import steam.client

from steam.core.msg import MsgProto, Msg
from steam.enums import EResult, EPersonaState, EFriendRelationship
from steam.enums.emsg import EMsg

from smokeserver.resolver import Resolver
from smokeserver.socket import Socket

class SteamUser(object):
    def __init__(self, sid):
        self.socket = Socket(sid)
        self.client = steam.client.SteamClient()
        self.friends = steam.client.builtins.friends.SteamFriendlist(
            self.client
        )
        self.credentials = None

        self.client.on('error', self.on_errors)
        self.client.on('auth_code_required', self.on_auth_code_required)
        self.client.on(EMsg.ClientFriendsList, self.on_client_friends_list)


    def on_json(self, json, sid):
        print("steam user received: {}".format(str(json)))
        if json['action'] == "sign_in":
            self.log_in(json['username'], json['password'])
        elif json['action'] == "auth_code":
            self.log_in(
                self.credentials[0],
                self.credentials[1],
                auth_code=json['auth_code']
            )


    def log_in(self, user, password, auth_code=None, two_factor_code=None):
        if self.client.relogin_available:
            self.client.relogin()
        elif auth_code is not None:
            print('logging in using auth code: {}'.format(auth_code))
            self.client.login(user, password, auth_code=auth_code)
        elif auth_code is None and two_factor_code is None:
            self.client.login(user, password)
            self.credentials = (user, password)


    def change_status(self, persona_state, player_name):
        pass


    def on_account_info(self, msg):
        if msg is None:
            return

        self.change_status


    def on_client_friends_list(self, msg):
        if msg is None:
            return

        friends_json = []
        for friend in self.friends:
            friends_json.append({
                'name': friend.name,
                'steam_id': friend.steam_id,
                'relationship': friend.relationship,
                'state': friend.state
            })

        self.socket.send_json({
            'action': 'friends_list',
            'data': friends_json
        })



    def on_auth_code_required(self, is_2fa, code_mismatch):
        if code_mismatch:
            self.socket.send_json({
                'action': 'invalid_authentication_code'
            })

        if is_2fa:
            self.socket.send_json({
                'action': '2fa_code_required'
            })
        else:
            self.socket.send_json({
                'action': 'auth_code_required'
            })


    def on_errors(self, result):
        self.socket.send_json({
            'action': 'error',
            'body': repr(EResult(result))
        })
