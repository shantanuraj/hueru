/**
 * Save token reducer
 */

import {
    STORE_TOKEN,
} from '../actions/save-token';

const saveToken = (state = {
    tokenSaved: false,
}, action) => {
    switch(action.type) {
        case STORE_TOKEN:
            return { ...state, tokenSaved: true};
        default:
            return state;
    }
}

export default saveToken;