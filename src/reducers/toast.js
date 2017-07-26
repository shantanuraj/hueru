/**
 * Toast reducer
 */

import {
  HIDE_TOAST,
  SHOW_TOAST,
} from '../actions/toast';

const toast = (state = {
  message: '',
}, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return { ...state, message: action.message };
    case HIDE_TOAST:
      if (action.message === state.message) {
        return { ...state, message: '' };
      }
      return state;
    default:
      return state;
  }
};

export default toast;
