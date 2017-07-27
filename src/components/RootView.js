import React from 'react';

import {
  APP_NAME,
} from '../config/constants';

import Devices from '../containers/Devices';
import ToastContainer from '../containers/Toast';

import BridgeFinder from './BridgeFinder';
import Title from './Title';
import Wrapper from './Wrapper';

const RootView = ({ hasToken }) => (
  <Wrapper>
    <Title title={APP_NAME} />
    { hasToken ? <Devices /> : <BridgeFinder /> }
    <ToastContainer />
  </Wrapper>
);

export default RootView;