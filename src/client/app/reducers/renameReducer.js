
import { SET_NAME } from '../actions/renameActions'
const initialState = { name: 'ale' };

export function rename(state = initialState, action) {
    // console.log(action.value);
     console.log(state);
    switch (action.type) {
        case SET_NAME:
            state = {
                ...state,
                name: action.payload
            }
            return state
            break;
        default:
            return state
    }
}