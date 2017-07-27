/**
 * Save token reducer
 */

import {
    KEY_TOKEN,
} from '../config/constants'

import {
    STORE_TOKEN,
} from '../actions/save-token';

const saveToken = (state = {
    tokenSaved: localStorage.KEY_TOKEN,
}, action) => {
    switch(action.type) {
        case STORE_TOKEN:
            return { ...state, tokenSaved: true};
        default:
            return state;
    }
}

export default saveToken;