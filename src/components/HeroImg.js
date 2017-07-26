/**
 * Hero image component
 */

import React from 'react';
import styled, {
  keyframes,
} from 'styled-components';
import {
  FINDING_COLORS,
  FOUND_COLORS,
  COLOR_PRIMARY,
} from '../config/colors';
import getPulseAnimation from '../utils/color-cycle';
import HueBridge from '../assets/HueBridge';

import {
  FINDING,
  FOUND,
} from '../containers/HeroPulseImage';

const getAnimationForState = (state) => {
  switch (state) {
    case FINDING:
      return `animation: ${keyframes`${getPulseAnimation(FINDING_COLORS)}`} 4s infinite;`;
    case FOUND:
      return `animation: ${keyframes`${getPulseAnimation(FOUND_COLORS)}`} 2s infinite;`;
    default:
      return ``;
  }
}

const HeroImg = styled.div`
  ${({status}) => getAnimationForState(status)}
  fill: ${COLOR_PRIMARY};
  width: 20em;
  height: 20em;
  padding: 4em;
`;

export default ({ status }) => (
  <HeroImg status={status}>
    <HueBridge />
  </HeroImg>
);
