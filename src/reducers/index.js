import {combineReducers} from 'redux';
import authReducer from './authReducer';
import serverReducer from './serverReducer';


export default combineReducers({
    auth: authReducer,
    server: serverReducer,
});