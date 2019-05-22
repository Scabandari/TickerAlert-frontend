import {combineReducers} from 'redux';
import authReducer from './authReducer';
import serverReducer from './serverReducer';
import allTickersReducer from './allTickersReducer';

export default combineReducers({
    auth: authReducer,
    server: serverReducer,
    allTickers: allTickersReducer
});