/**
 * Container for devices
 */

import {
  connect,
} from 'react-redux';
import {
  findDevices,
} from '../actions/hue';

import Devices from '../components/Devices';

const mapState = state => ({
  ...state.hue,
  ip: state.bridgeFinder.ip,
  token: state.bridgeAuth.token,
});

const mapDispatch = (dispatch, {
  ip,
  token,
}) => ({
  findDevices: () => dispatch(findDevices(ip, token)),
});

const DevicesContainer = connect(
  mapState,
  mapDispatch,
)(Devices);

export default DevicesContainer;