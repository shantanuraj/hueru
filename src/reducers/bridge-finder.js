/**
 * Bridge input reducer
 */

import {
  FIND_BRIDGE,
  BRIDGE_FOUND_RESULT
} from '../actions/bridge-finder';

const bridgeFinder = (state = {
  finding: false,
  found: false,
  ip: '',
}, action) => {
  switch (action.type) {
    case FIND_BRIDGE:
      return {...state, ip: action.ip, finding: true };
    case BRIDGE_FOUND_RESULT:
      if (action.ip !== state.ip) {
        // If action's ip is different, reject it
        return state;
      }
      return {...state, finding: false, found: action.found, time: action.time };
    default:
      return state;
  }
}

export default bridgeFinder;
