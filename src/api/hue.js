/**
 * hue API
 */

import axios from 'axios';
import {
  APP_NAME,
} from '../config/constants';
import adaptDevices from '../utils/adapt-devices';

class Hue {
  constructor(ip, token) {
    this.net = axios.create({
      baseURL: `http://${ip}/api/${ !!token ? token : '' }`,
    });
  }

  authenticate() {
    return this.net.post('/', {
      devicetype: APP_NAME,
    })
    .then(res => res.data);
  }

  getDevices() {
    return this.net.get(`/lights`)
    .then(res => res.data)
    .then(adaptDevices)
    .catch(err => null);
  }

  setState(id, state) {
    return this.net.put(`/lights/${id}`, state);
  }
}

export default Hue;
