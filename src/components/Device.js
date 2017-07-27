/**
 * Detailed view for each bulb
 */

import React from 'react';
import HueInput from './HueInput';

const Device = ({
  name,
}) => (
  <div>
    <p>{name}</p>
    <HueInput />
  </div>
);

export default Device;