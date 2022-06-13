import { CREATE_CARD, DELETE_CARD, SET_CARDS, UPDATE_CARD } from './constants';

export const setCards = (cards) => ({
  type: SET_CARDS,
  payload: cards,
});

export const deleteCard = (id) => ({
  type: DELETE_CARD,
  payload: id,
});

export const updateCard = (card) => ({
  type: UPDATE_CARD,
  payload: card,
});
export const createCard = (card) => ({
  type: CREATE_CARD,
  payload: card,
});
