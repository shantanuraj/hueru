import React, { Component } from 'react';

import HeroImg from './HeroImg';
import IPInput from './IPInput';
import Title from './Title';
import Wrapper from './Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          HueRU
        </Title>
        <HeroImg />
        <IPInput />
      </Wrapper>
    );
  }
}

export default App;
