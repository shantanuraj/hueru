/**
 * Combined reducers
 */

import {
  combineReducers,
} from 'redux';

import bridgeAuth from './bridge-auth';
import bridgeInput from './bridge-input';
import bridgeFinder from './bridge-finder';
import toast from './toast';

const reducers = combineReducers({
  bridgeAuth,
  bridgeInput,
  bridgeFinder,
  toast,
});

export default reducers;
