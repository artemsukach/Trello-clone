import { updateCard } from '../redux/cards/actions';
import { setError } from '../redux/error/actions';
import { setIsLoading } from '../redux/loader/actions';
import CardsRequests from '../services/Cards';

export const fetchCreateCard = (title, description, status) => {
  return async function (dispatch) {
    try {
      dispatch(setIsLoading(true));
      const response = await CardsRequests.createCard(
        title,
        description,
        status
      );
      dispatch(updateCard(response));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
