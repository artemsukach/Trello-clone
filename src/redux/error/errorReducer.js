import { SET_ERROR } from "./constants";


export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;

    default:
      return state;
  }
};