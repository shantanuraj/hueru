import React from 'react';

import {
  APP_NAME,
} from '../config/constants';

import Devices from '../containers/Devices';
import ToastContainer from '../containers/Toast';

import BridgeFinder from './BridgeFinder';
import Title from './Title';
import Wrapper from './Wrapper';

const RootView = ({tokenSaved}) => (
  <Wrapper>
    <Title title={APP_NAME} />
    { tokenSaved ? <Devices /> : <BridgeFinder /> }
    <ToastContainer />
  </Wrapper>
);

export default RootView;