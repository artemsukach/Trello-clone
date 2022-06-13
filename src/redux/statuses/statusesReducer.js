import { SET_STATUSES } from './constants';

export const statusesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STATUSES:
      return action.payload;

    default:
      return state;
  }
};
