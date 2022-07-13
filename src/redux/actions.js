import { FETCH_MOVIES, FILTER_MOVIES, SORT_MOVIES } from './actionTypes';

export function fetchMovies() {
  return async (dispatch) => {
    const res = await fetch('http://localhost:4000/movies?limit=12');
    const json = await res.json();
    dispatch({ type: FETCH_MOVIES, payload: json.data });
  };
}

export function filterMovies(filterBy) {
  return async (dispatch) => {
    const res = await fetch(
      `http://localhost:4000/movies?filter=${filterBy}&limit=12`
    );
    const json = await res.json();
    dispatch({ type: FILTER_MOVIES, payload: json.data });
  };
}

export function sortMovies(sortBy) {
  return async (dispatch) => {
    const res = await fetch(
      `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&limit=12`
    );
    const json = await res.json();
    dispatch({ type: SORT_MOVIES, payload: json.data });
  };
}
