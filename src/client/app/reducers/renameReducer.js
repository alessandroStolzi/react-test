import { SET_NAME } from '../actions/renameActions';

const initialState = { name: 'ale' };

export default function rename(state = initialState, action) {
  // console.log(action.value)
  switch (action.type) {
    case SET_NAME: {
      const newState = {
        ...state,
        name: action.payload
      };
      return newState;
    }
    // break;
    default:
      return state;
  }
}
