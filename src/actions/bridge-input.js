/**
 * Bridge Input actions
 */

import {
  lookupBridge,
} from './bridge-finder';

/**
 * Action on input change
 */
export const BRIDGE_IP_CHANGE = `BRIDGE_IP_CHANGE`;

/**
 * Sub-Action to call on bridge ip input change
 * @param {string} value - New bridge IP
 */
const bridgeIPChange = (value) => ({
  type: BRIDGE_IP_CHANGE,
  value,
});

/**
 * Action to call on bridge ip input change
 */
export const onBridgeIPChange = (value) => {
  return dispatch => {
    dispatch(bridgeIPChange(value));
    dispatch(lookupBridge(value));
  }
}
