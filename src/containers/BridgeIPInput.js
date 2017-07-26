/**
 * Bridge IP Input container component
 */

import {
  connect,
} from 'react-redux';

import {
  onBridgeIPChange,
} from '../actions/bridge-input';

import IPInput from '../components/IPInput';

const mapState = state => state.bridgeInput;

const mapDispatch = (dispatch) => ({
  onChange: ip => dispatch(onBridgeIPChange(ip)),
});

const BridgeIPInput = connect(
  mapState,
  mapDispatch,
)(IPInput);

export default BridgeIPInput;
