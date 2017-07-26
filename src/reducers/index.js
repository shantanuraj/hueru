/**
 * Combined reducers
 */

import {
  combineReducers,
} from 'redux';

import bridgeInput from './bridge-input';

const reducers = combineReducers({
  bridgeInput,
});

export default reducers;
