import { SET_ADD_CARD_MODAL } from './constants';

const initialValue = {
  active: false,
  currentTask: {},
};

export const modalReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_ADD_CARD_MODAL:
      return {
        ...state,
        active: action.payload.active,
        card: action.payload.card,
      };

    default:
      return state;
  }
};
