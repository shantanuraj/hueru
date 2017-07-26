import React from 'react';
import ReactDOM from 'react-dom';
import {
  injectGlobal,
} from 'styled-components';

import App from './components/App';
import {
  LIGHT_BACKGROUND,
} from './config/colors';
import registerServiceWorker from './registerServiceWorker';

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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
