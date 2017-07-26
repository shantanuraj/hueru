import React, { Component } from 'react';

import {
  APP_NAME,
} from '../config/constants';

import BridgeIPInput from '../containers/BridgeIPInput';

import HeroImg from './HeroImg';
import Title from './Title';
import Wrapper from './Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title title={APP_NAME} />
        <HeroImg />
        <BridgeIPInput />
      </Wrapper>
    );
  }
}

export default App;
