/**
 * Bridge auth reducer
 */

import {
  AUTH_SUCCESS,
  TRY_AUTH,
} from '../actions/bridge-auth';

const bridgeAuth = (state = {
  authenticating: false,
  token: '',
}, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, token: action.token, authenticating: false };
    case TRY_AUTH:
      return { ...state, authenticating: true };
    default:
      return state;
  }
};

export default bridgeAuth;
