/**
 * Hero title component
 */

import React from 'react';
import styled from 'styled-components';
import {
  COLOR_PRIMARY
} from '../config/colors';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${COLOR_PRIMARY};
`;

export default ({title}) => (
  <Title>
    {title}
  </Title>
);
