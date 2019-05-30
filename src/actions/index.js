import { SIGN_IN, SIGN_OUT, SET_SERVER, ALL_TICKERS } from "./types";

export const signIn = userId => dispatch => {
    dispatch ({
        type: SIGN_IN,
        payload: userId
    });
};

export const signOut = userId => dispatch => {
  dispatch ({
      type: SIGN_OUT
  });
};

export const setServer = endpoint => dispatch => {
    dispatch({
       type: SET_SERVER,
       payload: endpoint
    });
};
