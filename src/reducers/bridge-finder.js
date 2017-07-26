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
}, action) => {
  switch (action.type) {
    case FIND_BRIDGE:
      return {...state, finding: true };
    case BRIDGE_FOUND_RESULT:
      return {...state, finding: false, found: action.found };
    default:
      return state;
  }
}

export default bridgeFinder;
