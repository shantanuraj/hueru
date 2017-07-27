/**
 * IP Input component
 */

import React from 'react';
import styled from 'styled-components';
import {
  COLOR_PRIMARY,
  LIGHT_BACKGROUND,
} from '../config/colors';

const IPInput = styled.input`
  width: 15em;
  font-size: 1.5em;
  text-align: center;
  padding: 0.5em;
  margin: 0.5em;
  color: ${COLOR_PRIMARY};
  outline-color: ${COLOR_PRIMARY};
  background: ${LIGHT_BACKGROUND};
  border: none;
  border-radius: 3px;
`;

export default ({
  ip,
  onChange,
}) => (
  <IPInput
    value={ip}
    onChange={e => onChange(e.target.value)}
    placeholder="Enter bridge IP to continue"
  />
);
