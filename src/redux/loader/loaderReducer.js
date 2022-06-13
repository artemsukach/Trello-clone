import { SET_IS_LOADING } from './constants';

export const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return action.payload;

    default:
      return state;
  }
};
