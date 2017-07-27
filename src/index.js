import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider,
} from 'react-redux';
import {
  injectGlobal,
} from 'styled-components';

import RootContainer from './containers/RootContainer';
import {
  LIGHT_BACKGROUND,
} from './config/colors';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

// eslint-disable-next-line
injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
    font-family: sans-serif;
    background: ${LIGHT_BACKGROUND};
    margin: 0;
  }
`;

const HueRU = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
);

ReactDOM.render(<HueRU />, document.getElementById('root'));
registerServiceWorker();
