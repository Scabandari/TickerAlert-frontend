import {combineReducers} from 'redux';
import authReducer from './authReducer';
import serverReducer from './serverReducer';
import allTickersReducer from './allTickersReducer';
//import allTimeFramesReducer from './allTimeFramesReducer';

export default combineReducers({
    auth: authReducer,
    server: serverReducer,
    //allTickers: allTickersReducer, //todo need this or just a myTickers? or need at all? backend can track that
    //allTimeFrames: allTimeFramesReducer
});