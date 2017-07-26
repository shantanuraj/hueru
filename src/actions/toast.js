/**
 * Toast actions
 */

import {
  TOAST_DURATION,
} from '../config/constants';

/**
 * Show toast action
 */
export const SHOW_TOAST = 'SHOW_TOAST';

const showToast = message => ({
  type: SHOW_TOAST,
  message,
});

/**
 * Hide toast action
 */
export const HIDE_TOAST = 'HIDE_TOAST';

const hideToast = message => ({
  type: HIDE_TOAST,
  message,
 });

export const displayToast = (message) => {
  return dispatch => {
    dispatch(showToast(message));
    setTimeout(() => dispatch(hideToast(message)), TOAST_DURATION);
  }
};
