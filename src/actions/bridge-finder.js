/**
 * Bridge finder actions
 */

import isEqual from 'lodash.isequal';

import {
  expectedResponse,
  CONNECT_MESSAGE,
} from '../config/constants';

import {
  initAuth,
} from './bridge-auth';

import {
  displayToast,
} from './toast';

import Hue from '../api/hue';

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
const bridgeFoundResult = (found, ip) => ({
  found,
  ip,
  type: BRIDGE_FOUND_RESULT,
});

export const lookupBridge = (ip) => {
  return dispatch => {
    const result = (found) => bridgeFoundResult(found, ip);

    dispatch(findBridge(ip));
    new Hue(ip).authenticate()
      .then(isFound)
      .then(found => {
        dispatch(result(found));
        if (found) {
          dispatch(displayToast(CONNECT_MESSAGE));
          dispatch(initAuth(ip, Date.now()));
        }
      })
      .catch(() => dispatch(result(false)));
  };
}
