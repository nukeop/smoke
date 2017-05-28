import {AUTH_CODE_REQUIRED} from '../actions';

const initialState = {
    socket: io(),
    authCodeRequired: false
};

export default function SteamReducer(state = initialState, action) {
    switch (action.type) {
    case AUTH_CODE_REQUIRED:
        return Object.assign({}, state,
                             {
                                 authCodeRequired: action.state
                             });
    default:
        return state;
    }
}
