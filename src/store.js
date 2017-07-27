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

import {
  findDevices,
} from './actions/hue';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  storage.getStore(),
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

store.subscribe(() => storage.saveStore(store.getState()));

const setup = () => {
  const {
    bridgeAuth,
    bridgeFinder,
  } = store.getState();

  const ip = bridgeFinder.ip;
  const token = bridgeAuth.token;

  if (ip && token) {
    store.dispatch(findDevices(ip, token));
  }
};
setup();

export default store;
