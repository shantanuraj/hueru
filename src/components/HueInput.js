/**
 * Input field for Hue color states
 */
import React from 'react';
import styled from 'styled-components';
import {
  COLOR_PRIMARY,
  LIGHT_BACKGROUND,
} from '../config/colors';

const StyledInput = styled.input`
  width: 5em;
  font-size: 1.5em;
  text-align: center;
  padding: 0.5em;
  margin: 0.5em;
  color: ${COLOR_PRIMARY};
  border: 0.1em solid;
  border-color: ${COLOR_PRIMARY};
  outline-color: ${COLOR_PRIMARY};
  background: ${LIGHT_BACKGROUND};
  border-radius: 3px;
`;

const HueInput = (props) => {
  const {
    hue,
    sat,
    bri,
  } = props;
  return (
    <div>
      <StyledInput placeholder="Hue" value={hue} />
      <StyledInput placeholder="Saturation" value={sat} />
      <StyledInput placeholder="Brightness" value={bri} />
    </div>
  );
};

export default HueInput;