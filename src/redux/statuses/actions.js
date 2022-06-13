import { SET_STATUSES } from './constants';

export const setStatuses = (statuses) => ({
  type: SET_STATUSES,
  payload: statuses,
});
