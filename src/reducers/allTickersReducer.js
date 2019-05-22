import { ALL_TICKERS } from "../actions/types";

const INITIAL_STATE = {
    allTickers: []
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ALL_TICKERS:
            return {...state, allTickers: action.payload};
        default:
            return state;
    }
}