import { combineReducers } from 'redux';
import counter from './counter';
import rename from './rename';

export default combineReducers({
  counter,
  rename
});
