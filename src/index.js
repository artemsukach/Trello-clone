import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import {store} from './redux';

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <App />
  </Provider>
);
