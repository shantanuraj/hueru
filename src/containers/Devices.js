/**
 * Container for devices
 */

import {
  connect,
} from 'react-redux';
import {
  findDevices,
} from '../actions/hue';

import adaptDevices from '../utils/adapt-devices';
import Devices from '../components/Devices';

const mapState = state => ({
  ...state.hue,
  devices: state.hue.devices === null ? null : adaptDevices(state.hue.device),
  ip: state.bridgeFinder.ip,
  token: state.bridgeAuth.token,
});

const mapDispatch = (dispatch, {
  ip,
  token,
}) => ({
  findDevices: () => dispatch(findDevices(ip, token)),
  onChange: id => (key, value) => console.log(id, key, value),
});

const DevicesContainer = connect(
  mapState,
  mapDispatch,
)(Devices);

export default DevicesContainer;