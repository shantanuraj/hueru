/**
 * Reducer for hue actions
 */

import {
  DEVICES_FOUND,
  DEVICES_NOT_FOUND,
  GET_DEVICES,
} from '../actions/hue';

const hue = (state = {
  devices: {},
  finding: false,
}, action) => {
  switch (action.type) {
    case GET_DEVICES:
      return { ...state, finding: true };
    case DEVICES_FOUND:
      return { ...state, finding: false, devices: action.devices };
    case DEVICES_NOT_FOUND:
      return { ...state, finding: false };
    default:
      return state;
  }
};

export default hue;