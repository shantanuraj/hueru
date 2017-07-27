/**
 * Hue light actions
 */

import Hue from '../api/hue';

/**
 * Action to get devices
 */
export const GET_DEVICES = 'GET_DEVICES';

const getDevices = (ip, token) => ({
  type: GET_DEVICES,
  ip,
  token,
});

/**
 * Devices found action
 */
export const DEVICES_FOUND = 'DEVICES_FOUND';

const devicesFound = (devices) => ({
  type: DEVICES_FOUND,
  devices,
});

/**
 * Devices not found action
 */
export const DEVICES_NOT_FOUND = 'DEVICES_NOT_FOUND';

const devicesNotFound = () => ({
  type: DEVICES_NOT_FOUND,
});

export const findDevices = (ip, token) => {
  const hue = new Hue(ip, token);
  return (dispatch) => {
    dispatch(getDevices(ip));
    hue.getDevices()
    .then(response => {
      if (!response) {
        throw response;
      }
      return response;
    })
    .then(devicesFound)
    .then(dispatch)
    .catch(() => {
      dispatch(devicesNotFound());
    });
  };
};