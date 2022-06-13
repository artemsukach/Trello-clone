import { SET_ERROR } from "./constants";

export const setError = (state) => ({
  type: SET_ERROR,
  payload: state,
});