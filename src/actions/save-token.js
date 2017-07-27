/**
 * Save token actions
 */

import {
    KEY_TOKEN,
} from '../config/constants';

/**
 * Store token action
 */
export const STORE_TOKEN = 'STORE_TOKEN';

const storeToken = (token) => ({
    type: STORE_TOKEN,
    token,
});

/**
 * Save token action
 */
export const saveToken = (token) => {
    return dispatch => {
        dispatch(storeToken(token));
        localStorage[KEY_TOKEN] = token;
    }
};