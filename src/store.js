/**
 * Redux store for app
 */

import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

import storage from './utils/storage';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  storage.getStore(),
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

store.subscribe(() => storage.saveStore(store.getState()));

export default store;
