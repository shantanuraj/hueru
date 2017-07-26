import React, { Component } from 'react';

import {
  APP_NAME,
} from '../config/constants';

import HeroImg from './HeroImg';
import IPInput from './IPInput';
import Title from './Title';
import Wrapper from './Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title title={APP_NAME} />
        <HeroImg />
        <IPInput />
      </Wrapper>
    );
  }
}

export default App;
