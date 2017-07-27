/**
 * View for Device List
 */

import React from 'react';
import Device from './Device';

const DeviceList = ({ devices }) => (
  <div>
    { devices.map(device => <Device { ...device } key={device.id} />) }
  </div>
);

export default DeviceList;