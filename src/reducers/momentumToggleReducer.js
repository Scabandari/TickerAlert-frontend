import { SET_MOMENTUM } from '../actions/types';

const INITIAL_STATE = {
    closeOrVolume: 'close'
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_MOMENTUM:
            return {...state, closeOrVolume: action.payload};
        default:
            return state;
    }
};

