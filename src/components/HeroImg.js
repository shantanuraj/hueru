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
  ${({ isActive }) => isActive ? `animation: ${pulse} 4s infinite;` : ''}
  fill: ${COLOR_PRIMARY};
  width: 20em;
  height: 20em;
  padding: 4em;
`;

export default ({
  isActive,
}) => (
  <HeroImg isActive={isActive}>
    <HueBridge />
  </HeroImg>
);
