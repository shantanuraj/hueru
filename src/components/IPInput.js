/**
 * IP Input component
 */

import styled from 'styled-components';
import {
  COLOR_PRIMARY
} from '../config/colors';

const IPInput = styled.input`
  width: 360px;
  text-align: center;
  padding: 0.5em;
  margin: 0.5em;
  color: ${COLOR_PRIMARY};
  outline-color: ${COLOR_PRIMARY};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export default IPInput;
