/**
 * Devices component
 */

import React from 'react';
// import HueInput from './HueInput';

const Devices = ({
  finding,
  devices,
  findDevices,
}) => {
  if (finding) {
    return (
      <div>
        <p>Finding devices...</p>
      </div>
    );
  } else if (devices && devices.length > 0) {
    return (
      <div>
        {devices.map(device => <p>{device.id}</p>)}
      </div>
    );
  } else if (devices && devices.length === 0) {
    return (
      <div>
        <p>No devices</p>
      </div>
    );
  } else {
    findDevices();
    return null;
  }
}
export default Devices;