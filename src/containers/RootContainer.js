/**
 * Connecting Root Container to token state
 */

import {
    connect
} from 'react-redux';

import RootView from '../components/RootView';

const mapState = state => state.saveToken;

const RootContainer = connect(
    mapState,
)(RootView);

export default RootContainer;