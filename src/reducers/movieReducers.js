import { FETCH_MOVIES } from '../actions/types';

const initState = {
    items: []
}

export default function(state = initState, actions){
    // debugger
    switch(actions.type) {
        case FETCH_MOVIES:
            return {
                ...state, items: actions.data
            };
        default:
            return state;
    }
}