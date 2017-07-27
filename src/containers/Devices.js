/**
 * Container for devices
 */

import {
  connect,
} from 'react-redux';
import {
  changeDeviceState,
  findDevices,
} from '../actions/hue';

import adaptDevices from '../utils/adapt-devices';
import Devices from '../components/Devices';

const mapState = state => ({
  ...state.hue,
  devices: !state.hue.devices ? null : adaptDevices(state.hue.devices),
  ip: state.bridgeFinder.ip,
  token: state.bridgeAuth.token,
});

const mapDispatch = (dispatch, state) => {
  const {
    ip,
    token,
  } = state;
  return ({
  findDevices: () => dispatch(findDevices(ip, token)),
  onChange: (ip, token) =>
    (id) =>
      (key, value) =>
        dispatch(changeDeviceState(
          ip,
          token,
          id,
          key,
          value,
        ))
}) };

const DevicesContainer = connect(
  mapState,
  mapDispatch,
)(Devices);

export default DevicesContainer;