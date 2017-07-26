/**
 * Combined reducers
 */

import {
  combineReducers,
} from 'redux';

import bridgeInput from './bridge-input';
import bridgeFinder from './bridge-finder';

const reducers = combineReducers({
  bridgeInput,
  bridgeFinder,
});

export default reducers;
