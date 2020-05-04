import { combineReducers } from 'redux';
import moviesReducers from './movieReducers'

export default combineReducers({
    movies: moviesReducers
})