import React, { Component } from 'react';

import styled, {
  injectGlobal,
} from 'styled-components';

import HueBridge from './assets/HueBridge';

injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
    font-family: sans-serif;
    background: papayawhip;
    margin: 0;
  }
`
const Wrapper = styled.section`
  padding: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  padding-bottom: 4em;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const HeroImg = styled.div`
  width: 360px;
  height: 360px;
  fill: palevioletred;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          HueRU
        </Title>
        <HeroImg>
          <HueBridge />
        </HeroImg>
      </Wrapper>
    );
  }
}

export default App;
