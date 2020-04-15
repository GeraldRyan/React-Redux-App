import {combineReducers} from 'redux';
import {jokeReducer as jokes} from './appReducer'

export default combineReducers({jokes})