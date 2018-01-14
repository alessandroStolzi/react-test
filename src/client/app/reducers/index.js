import { combineReducers } from 'redux'
import {counter} from './addReducer'
import {rename} from './renameReducer'

export default combineReducers({
    counter,
    rename
})