import React from 'react';

import {
  APP_NAME,
} from '../config/constants';


import BridgeIPInput from '../containers/BridgeIPInput';
import HeroPulseImage from '../containers/HeroPulseImage';
import ToastContainer from '../containers/Toast';

import Title from './Title';
import Wrapper from './Wrapper';

const RootContainer = () => (
    <Wrapper>
        <Title title={APP_NAME} />
        <HeroPulseImage />
        <BridgeIPInput />
        <ToastContainer />
      </Wrapper>
);

export default RootContainer;