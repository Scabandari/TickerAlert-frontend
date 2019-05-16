import { SIGN_IN, SIGN_OUT } from "./types";

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