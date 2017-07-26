/**
 * Hero image component
 */

import React from 'react';
import styled, {
  keyframes,
} from 'styled-components';
import {
  COLOR_PRIMARY
} from '../config/colors';
import getPulseAnimation from '../utils/color-cycle';
import HueBridge from '../assets/HueBridge';

const pulse = keyframes`${getPulseAnimation()}`;

const HeroImg = styled.div`
  animation: ${pulse} 4s infinite;
  width: 20em;
  height: 20em;
  padding: 4em;
`;

export default () => (
  <HeroImg>
    <HueBridge />
  </HeroImg>
);
