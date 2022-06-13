import { CREATE_CARD, DELETE_CARD, SET_CARDS, UPDATE_CARD } from "./constants";


export const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CARDS:
      return action.payload;
    case CREATE_CARD:
      return [...state, action.payload];
    case UPDATE_CARD:
      return state.map((card) => {
        if (+card.id === +action.payload.id) {
          return action.payload;
        } else {
          return card;
        }
      });
    case DELETE_CARD:
      return state.filter((card) => card.id !== action.payload);

    default:
      return state;
  }
};
