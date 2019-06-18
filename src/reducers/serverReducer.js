import {SET_SERVER} from "../actions/types";

const INITIAL_STATE = {
    //serverEndpoint: 'http://localhost:4500/'
    //serverEndpoint: 'ec2-52-15-220-86.us-east-2.compute.amazonaws.com:4500/'
    serverEndpoint: 'http://ec2-52-15-220-86.us-east-2.compute.amazonaws.com:4500/'
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_SERVER:
            return {...state, serverEndpoint: action.payload};
        default:
            return state;
    }
}

