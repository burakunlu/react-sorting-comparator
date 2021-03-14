import { createAction, handleActions } from "redux-actions";

const initialState = 20303.427000007;

export const SET_TIME = "SET_TIME";
export const setTime = createAction(SET_TIME);

export const time = handleActions({
  SET_TIME: (state, { payload }) => {
    return payload;
  },
}, initialState);