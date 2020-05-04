import { FETCH_MOVIES } from './types';

export const fetchMovies = () => dispatch => {
            // debugger
            fetch('https://jsonmock.hackerrank.com/api/movies')
            .then(res => res.json())
            .then(movies => dispatch({
                type: FETCH_MOVIES,
                data: movies.data
            }));
         };

export const searchMovie = (query) => dispatch => {
            // debugger
            fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${query}`)
            .then(res => res.json())
            .then(movies => dispatch({
                type: FETCH_MOVIES,
                data: movies.data
            }));
         };

export const deleteMovie = filterData => dispatch => {
    dispatch ({
        type: FETCH_MOVIES,
        data: filterData
    })
};