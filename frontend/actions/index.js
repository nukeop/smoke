export const AUTH_CODE_REQUIRED = 'AUTH_CODE_REQUIRED';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const RECEIVE_SOCKET_MESSAGE = 'RECEIVE_SOCKET_MESSAGE';
export const STEAM_ERROR = 'STEAM_ERROR';


export function setAuthCodeRequired(state=true) {
    return {
        type: AUTH_CODE_REQUIRED,
        state: state
    }
}

export function steamSignIn(socket, username, password, authCode=null) {
    socket.emit('json', {
      action: SIGN_IN_REQUEST,
      username: username,
      password: password,
      authCode: authCode
    });

    return {
      type: SIGN_IN_REQUEST,
      username: username,
      password: password,
      authCode: authCode
    }
}


export function receiveSocketMessage(message) {
  console.log('Got socket message: ', message);
  return {
    type: RECEIVE_SOCKET_MESSAGE
  }
}
