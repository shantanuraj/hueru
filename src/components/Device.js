/**
 * Detailed view for each bulb
 */

import React from 'react';
import HueInput from './HueInput';

const Device = ({
  name,
  state,
  onChange,
}) => (
  <div>
    <p>{name}</p>
    <HueInput onChange={onChange} {...state} />
  </div>
);

export default Device;