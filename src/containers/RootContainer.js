/**
 * Connecting Root Container to token state
 */

import {
  connect
} from 'react-redux';

import RootView from '../components/RootView';

const mapState = state => ({
  hasToken: !!state.bridgeAuth.token,
});

const RootContainer = connect(
  mapState,
)(RootView);

export default RootContainer;