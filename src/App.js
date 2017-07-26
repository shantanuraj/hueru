import React, { Component } from 'react';

import styled, {
  injectGlobal,
} from 'styled-components';

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
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Hue R U?
        </Title>
      </Wrapper>
    );
  }
}

export default App;
