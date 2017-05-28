import json
import os
import time

import steam.client

from steam.core.msg import MsgProto, Msg
from steam.enums import EResult, EPersonaState, EFriendRelationship
from steam.enums.emsg import EMsg

from smokeserver.resolver import Resolver
from smokeserver.socket import Socket
from smokeserver.actions import *

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
        if json['action'] == SIGN_IN_REQUEST:
            if(json.get('authCode') is not None):
                self.log_in(
                    json['username'],
                    json['password'],
                    json['authCode']
                )
            else:
                self.log_in(json['username'], json['password'])


    def set_up_sentry(self, user):
        sentrypath = os.path.join(os.getcwd(), 'sentries', user)
        if not os.path.exists(sentrypath):
            os.makedirs(sentrypath)

        self.client.set_credential_location(sentrypath)


    def log_in(self, user, password, auth_code=None, two_factor_code=None):
        self.set_up_sentry(user)

        if self.client.relogin_available:
            self.client.relogin()
        elif auth_code is not None:
            self.client.login(user, password, auth_code=auth_code)
        elif auth_code is None and two_factor_code is None:
            self.client.login(user, password)
            self.credentials = (user, password)


    def change_status(self, persona_state):
        sendmsg = MsgProto(EMsg.ClientChangeStatus)
        sendmsg.body.persona_state = persona_state
        sendmsg.body.player_name = self.client.user.name

        self.client.send(sendmsg)


    def on_account_info(self, msg):
        if msg is None:
            return

        print('account info received')
        print(msg)
        self.change_status(EPersonaState.Online)


    def on_client_friends_list(self, msg):
        if msg is None:
            return

        time.sleep(3)
        friends_json = []
        for friend in self.friends:
            friends_json.append({
                'name': friend.name,
                'steam_id': friend.steam_id,
                'relationship': friend.relationship,
                'state': friend.state,
                'avatar': friend.get_avatar_url(0)
            })

        self.socket.send_json({
            'action': RECEIVE_FRIENDS_LIST,
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
                'action': AUTH_CODE_REQUIRED
            })


    def on_errors(self, result):
        self.socket.send_json({
            'action': 'STEAM_ERROR',
            'body': repr(EResult(result))
        })
