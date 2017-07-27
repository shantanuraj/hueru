/**
 * View for Device List
 */

import React from 'react';
import Device from './Device';

const DeviceList = ({ devices, onChange }) => (
  <div>
    {devices.map(device => (
      <Device
        { ...device }
        key={device.id}
        onChange={onChange(device.id)}
      />
    ))}
  </div>
);

export default DeviceList;