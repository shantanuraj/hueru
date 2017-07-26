/**
 * Hero image component
 */

import React from 'react';
import styled from 'styled-components';
import {
  COLOR_PRIMARY
} from '../config/colors';
import HueBridge from '../assets/HueBridge';

const HeroImg = styled.div`
  width: 360px;
  height: 360px;
  fill: ${COLOR_PRIMARY};
  padding: 4em;
`;

export default () => (
  <HeroImg>
    <HueBridge />
  </HeroImg>
);
