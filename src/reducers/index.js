import {combineReducers} from 'redux';
import authReducer from './authReducer';
import serverReducer from './serverReducer';
import momentumToggleReducer from './momentumToggleReducer';


export default combineReducers({
    auth: authReducer,
    server: serverReducer,
    momentumToggle: momentumToggleReducer
});