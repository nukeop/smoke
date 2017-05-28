import {AUTH_CODE_REQUIRED, SIGN_IN_REQUEST} from '../actions';

const initialState = {
    socket: io(),
    authCodeRequired: false,
    waitingForSignIn: false,
    credentials: {
      username: null,
      password: null,
      authCode: null
    }
};

export default function SteamReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
    return Object.assign({}, state,
      {
        credentials: {
          username: action.username,
          password: action.password,
          authCode: action.authCode
        }
      });
    case AUTH_CODE_REQUIRED:
    return Object.assign({}, state,
      {
        authCodeRequired: action.state
      });
    default:
    return state;
  }
}
