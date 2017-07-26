import React, { Component } from 'react';

import {
  APP_NAME,
} from '../config/constants';

import BridgeIPInput from '../containers/BridgeIPInput';
import HeroPulseImage from '../containers/HeroPulseImage';

import Toast from './Toast';
import Title from './Title';
import Wrapper from './Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title title={APP_NAME} />
        <HeroPulseImage />
        <BridgeIPInput />
        <Toast message="Test!"/>
      </Wrapper>
    );
  }
}

export default App;
