/**
 * Storage utils
 */

import {
  KEY_STORE,
} from '../config/constants';

const storage = {
  saveStore(store) {
    localStorage.setItem(KEY_STORE, JSON.stringify(store));
  },
  getStore() {
    const store = localStorage.getItem(KEY_STORE);
    if (store) {
      return JSON.parse(store);
    }
    return undefined;
  },
};

export default storage;