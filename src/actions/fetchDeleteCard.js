import { deleteCard } from '../redux/cards/actions';
import { setError } from '../redux/error/actions';
import { setIsLoading } from '../redux/loader/actions';
import CardsRequests from '../services/Cards';

export const fetchDeleteCard = (id) => {
  return async function (dispatch) {
    try {
      dispatch(setIsLoading(true));

      await CardsRequests.deleteCard(id);

      dispatch(deleteCard(id));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
