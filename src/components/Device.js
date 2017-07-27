/**
 * Detailed view for each bulb
 */

import React from 'react';
import HueInput from './HueInput';

const Device = ({
  name,
  state,
}) => (
  <div>
    <p>{name}</p>
    <HueInput {...state} />
  </div>
);

export default Device;