/**
 * Bridge input reducer
 */

import {
  BRIDGE_IP_CHANGE,
} from '../actions/bridge-input';

const bridgeInput = (state = {
  ip: '',
}, action) => {
  switch (action.type) {
    case BRIDGE_IP_CHANGE:
      return {...state, ip: action.value };
    default:
      return state;
  }
}

export default bridgeInput;
