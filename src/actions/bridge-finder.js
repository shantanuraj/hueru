/**
 * Bridge finder actions
 */

import isEqual from 'lodash.isequal';

 import {
  expectedResponse,
} from '../config/constants';

const isFound = response => isEqual(response, expectedResponse);

/**
 * Find bridge action
 */
export const FIND_BRIDGE = 'FIND_BRIDGE';

const findBridge = (ip) => ({
  type: FIND_BRIDGE,
  ip,
});

/**
 * Action for when bridge is found
 */
export const BRIDGE_FOUND_RESULT = 'BRIDGE_FOUND_RESULT';

/**
 * Action for when bridge is found or not found
 * @param {boolean} found
 */
const bridgeFoundResult = (found) => ({
  found,
  type: BRIDGE_FOUND_RESULT,
});

export const lookupBridge = (ip) => {
  return dispatch => {
    dispatch(findBridge(ip));
    fetch(`http://${ip}/api`)
      .then(res => res.json())
      .then(isFound)
      .then(bridgeFoundResult)
      .then(dispatch)
      .catch(() => dispatch(bridgeFoundResult(false)));
  };
}
