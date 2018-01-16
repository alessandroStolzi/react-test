import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counter from './counter';
import rename from './rename';

export default combineReducers({
  counter,
  rename,
  form: formReducer
});
