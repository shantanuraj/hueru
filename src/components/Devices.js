/**
 * Devices component
 */

import React from 'react';
import DeviceList from './DeviceList';

const Devices = ({
  finding,
  devices,
  findDevices,
  onChange,
}) => {
  if (finding) {
    return (
      <div>
        <p>Finding devices...</p>
      </div>
    );
  } else if (devices && devices.length > 0) {
    return (
      <DeviceList onChange={onChange} devices={devices} />
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