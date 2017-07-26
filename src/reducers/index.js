/**
 * Combined reducers
 */

import {
  combineReducers,
} from 'redux';

import bridgeInput from './bridge-input';
import bridgeFinder from './bridge-finder';
import toast from './toast';

const reducers = combineReducers({
  bridgeInput,
  bridgeFinder,
  toast,
});

export default reducers;
