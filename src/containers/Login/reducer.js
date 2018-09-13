
import { DEFAULT_ACTION } from './constants';

const defaultState = {
    text: "sample text"
}

const reducer = (state = defaultState, action ) => {
    switch (action.type) {
        case DEFAULT_ACTION: 
            return Object.assign({ } , state, {text: action.text});
        default: 
            return state;
    }
}

export default reducer;