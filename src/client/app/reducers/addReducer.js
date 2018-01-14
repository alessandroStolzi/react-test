
import {INCREMENT,DECREMENT} from '../actions/addActions'
const initialState = { name: 'ale', value: 0 };

export function counter(state = initialState, action) {
    // console.log(action.value);
      console.log(state);
    switch (action.type) {
      case INCREMENT:
        state = {
          ...state,
          name: 'ale',
          value: state.value + action.payload.val
        }
        return state
        break;
      case DECREMENT:
        state = {
          ...state,
          name: 'ale',
          value: state.value - action.payload.val
        }
        return state
        break;
      default:
        return state
    }
  }