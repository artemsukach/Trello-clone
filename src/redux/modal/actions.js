import { SET_ADD_CARD_MODAL } from "./constants";

export const setModal = ({ active, card = {} }) => ({
  type: SET_ADD_CARD_MODAL,
  payload: { active, card },
});
