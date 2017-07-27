/**
 * Reducer for hue actions
 */

import {
  DEVICE_STATE_CHANGE,
  DEVICES_FOUND,
  DEVICES_NOT_FOUND,
  GET_DEVICES,
} from '../actions/hue';

const hue = (state = {
  devices: null,
  finding: false,
}, action) => {
  switch (action.type) {
    case GET_DEVICES:
      return { ...state, finding: true };
    case DEVICES_FOUND:
      return { ...state, finding: false, devices: action.devices };
    case DEVICES_NOT_FOUND:
      return { ...state, finding: false, devices: {} };
    case DEVICE_STATE_CHANGE:
      return {
        ...state,
        devices: {
          ...state.devices,
          [action.deviceId]: {
            ...state.devices[action.deviceId],
            state: {
              ...state.devices[action.deviceId].state,
              [action.key]: action.value,
            }
          }
        }
      };
    default:
      return state;
  }
};

export default hue;