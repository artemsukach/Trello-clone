import { setError } from '../redux/error/actions';
import { setIsLoading } from '../redux/loader/actions';
import { setStatuses } from '../redux/statuses/actions';
import CardsRequests from '../services/Cards';

export const fetchStatuses = () => {
  return async function (dispatch) {
    try {
      dispatch(setIsLoading(true));

      const statusesResponse = await CardsRequests.getStatuses();
      const statuses = await statusesResponse.json();
      dispatch(setStatuses(statuses));

      dispatch(setStatuses(statuses));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
