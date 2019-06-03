import { SIGN_IN, SIGN_OUT, SET_SERVER, SET_MOMENTUM } from "./types";

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

export const toggleMomentum = value => dispatch => {
    dispatch({
        type: SET_MOMENTUM,
        payload: value
    });
};
