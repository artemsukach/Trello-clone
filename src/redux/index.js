import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { statusesReducer } from './statuses/statusesReducer';
import { cardsReducer } from './cards/cardsReducer';
import { loaderReducer } from './loader/loaderReducer';
import { errorReducer } from './error/errorReducer';
import { modalReducer } from './modal/modalReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  statuses: statusesReducer,
  loader: loaderReducer,
  error: errorReducer,
  modal: modalReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
