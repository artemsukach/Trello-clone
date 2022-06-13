import { updateCard } from '../redux/cards/actions';
import { setError } from '../redux/error/actions';
import { setIsLoading } from '../redux/loader/actions';
import CardsRequests from '../services/Cards';

export const fetchUpdateCard = (id, title, description, status) => {
  return async function (dispatch) {
    try {
      dispatch(setIsLoading(true));
      const response = await CardsRequests.updateCard(id, title, description, status);
      const card = await response.json();
      dispatch(updateCard(card));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
