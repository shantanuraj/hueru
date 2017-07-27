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

const handleChange = (cb, type) => event => cb(type, parseInt(event.target.value, 10) || 0);

const HueInput = (props) => {
  const {
    hue,
    sat,
    bri,
    onChange,
  } = props;

  return (
    <div>
      <StyledInput max="65535" onChange={handleChange(onChange, 'hue')} placeholder="Hue" value={hue} />
      <StyledInput max="254" onChange={handleChange(onChange, 'sat')} placeholder="Saturation" value={sat} />
      <StyledInput max="254" onChange={handleChange(onChange, 'bri')} placeholder="Brightness" value={bri} />
    </div>
  );
};

export default HueInput;