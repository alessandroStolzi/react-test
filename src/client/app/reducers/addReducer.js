import { INCREMENT, DECREMENT } from '../actions/addActions';

const initialState = { name: 'ale', value: 0 };

export default function counter(state = initialState, action) {
  // console.log(action.value);
  console.log(state);
  switch (action.type) {
    case INCREMENT: {
      const newState = {
        ...state,
        name: 'ale',
        value: state.value + action.payload.val
      };
      return newState;
    }
    case DECREMENT: {
      const newState = {
        ...state,
        name: 'ale',
        value: state.value - action.payload.val
      };
      return newState;
    }
    default:
      return state;
  }
}
