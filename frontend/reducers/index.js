import { combineReducers } from 'redux';
import SteamReducer from './steam';

const rootReducer = combineReducers({
    steam: SteamReducer
});

export default rootReducer;
