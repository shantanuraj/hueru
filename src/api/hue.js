/**
 * hue API
 */

import axios from 'axios';
import {
  APP_NAME,
} from '../config/constants';

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
    .catch(err => null);
  }
}

export default Hue;
