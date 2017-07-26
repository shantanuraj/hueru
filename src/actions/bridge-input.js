/**
 * Bridge Input actions
 */

/**
 * Action on input change
 */
export const BRIDGE_IP_CHANGE = `BRIDGE_IP_CHANGE`;

/**
 * Action to call on bridge ip input change
 * @param {string} value - New bridge IP
 */
export const bridgeIPChange = (value) => ({
  type: BRIDGE_IP_CHANGE,
  value,
});
