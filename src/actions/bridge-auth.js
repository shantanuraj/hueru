/**
 * Bridge auth actions
 */

import {
  THIRTY_SECONDS,
} from '../config/constants';

import extractToken from '../utils/extract-token';

import {
  saveToken
} from './save-token';

import Hue from '../api/hue';

/**
 * Try auth action
 */

export const TRY_AUTH = 'TRY_AUTH';

const tryAuth = (ip) => ({
  type: TRY_AUTH,
  ip,
});

/**
 * Auth success action
 */
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

const authSuccess = token => ({
  type: AUTH_SUCCESS,
  token,
});

/**
 * Auth fail action
 */
const AUTH_FAIL = 'AUTH_FAIL';

const authFail = () => ({
  type: AUTH_FAIL,
});

/**
 * Initiate auth action
 */
export const initAuth = (ip, time) => {
  const hue = new Hue(ip);
  const limit = time + THIRTY_SECONDS;

  const tryAuthenticate = (dispatch) => {
    dispatch(tryAuth(ip));
    return hue.authenticate()
      .then(extractToken)
      .then(token => {
        if (!token) {
          throw token;
        }
        dispatch(saveToken(token));
        return token;
      })
      .then(authSuccess)
      .then(dispatch)
      .catch(err => {
        dispatch(authFail());
        if (Date.now() > limit) {
          return;
        }
        return tryAuthenticate(dispatch);
      });
  }

  return dispatch => tryAuthenticate(dispatch);
};