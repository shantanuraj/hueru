/**
 * hue API
 */

import axios from 'axios';
import {
  APP_NAME,
} from '../config/constants';

class Hue {
  constructor(ip) {
    this.net = axios.create({
      baseURL: `http://${ip}/api/`,
    });
  }

  authenticate() {
    return this.net.post('/', {
      devicetype: APP_NAME,
    })
    .then(res => res.data);
  }
}

export default Hue;
