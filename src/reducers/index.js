/**
 * Combined reducers
 */

import {
  combineReducers,
} from 'redux';

import bridgeAuth from './bridge-auth';
import bridgeFinder from './bridge-finder';
import bridgeInput from './bridge-input';
import hue from './hue';
import toast from './toast';

const reducers = combineReducers({
  bridgeAuth,
  bridgeFinder,
  bridgeInput,
  hue,
  toast,
});

export default reducers;
