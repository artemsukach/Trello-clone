import { setCards } from '../redux/cards/actions';
import { setError } from '../redux/error/actions';
import { setIsLoading } from '../redux/loader/actions';
import CardsRequests from '../services/Cards';

export const fetchCards = () => {
  return async function (dispatch) {
    try {
      dispatch(setIsLoading(true));

      const cardsResponse = await CardsRequests.getCards();
      const cards = await cardsResponse.json();
      dispatch(setCards(cards));

      dispatch(setCards(cards));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
