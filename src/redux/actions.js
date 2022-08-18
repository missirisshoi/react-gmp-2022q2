import {
  FETCH_MOVIES,
  FILTER_MOVIES,
  SORT_MOVIES,
  FIND_MOVIES,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
} from './actionTypes';

export function fetchMovies() {
  return async (dispatch) => {
    const res = await fetch('http://localhost:4000/movies?limit=15');
    const json = await res.json();
    dispatch({ type: FETCH_MOVIES, payload: json });
  };
}

export function filterMovies(filterBy) {
  return async (dispatch) => {
    const res = await fetch(
      `http://localhost:4000/movies?filter=${filterBy}&limit=15`
    );
    const json = await res.json();
    dispatch({ type: FILTER_MOVIES, payload: json });
  };
}

export function sortMovies(sortBy) {
  return async (dispatch) => {
    const res = await fetch(
      `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&limit=15`
    );
    const json = await res.json();
    dispatch({ type: SORT_MOVIES, payload: json });
  };
}

export function findMovies(searchValue) {
  return async (dispatch) => {
    const res = await fetch(
      `http://localhost:4000/movies?search=${searchValue}&searchBy=title`
    );
    const json = await res.json();
    dispatch({ type: FIND_MOVIES, payload: json });
  };
}

export function addMovie(movie) {
  const newMovie = JSON.stringify({
    ...movie,
    genres: movie.genres.split(', '),
    vote_average: +movie.vote_average,
    runtime: +movie.runtime,
    tagline: movie.tagline || movie.overview.split('.')[0],
  });
  return async (dispatch) => {
    await fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: newMovie,
    });
    dispatch({ type: ADD_MOVIE });
    dispatch(fetchMovies());
  };
}

async function getMovieByID(id) {
  const res = await fetch(`http://localhost:4000/movies/${id}`);
  const json = await res.json();
  return json;
}

export function editMovie(movie) {
  return async (dispatch) => {
    const fetchedMovie = await getMovieByID(movie.id);
    const newMovie = JSON.stringify({
      ...fetchedMovie,
      ...movie,
      genres: movie.genres.split(', '),
      vote_average: +movie.vote_average,
      runtime: +movie.runtime,
      tagline: movie.tagline || movie.overview.split('.')[0],
    });
    await fetch('http://localhost:4000/movies', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: newMovie,
    });
    dispatch({ type: EDIT_MOVIE });
    dispatch(fetchMovies());
  };
}

export function deleteMovie(id) {
  return async (dispatch) => {
    await fetch(`http://localhost:4000/movies/${id}`, {
      method: 'DELETE',
    });
    dispatch({ type: DELETE_MOVIE });
    dispatch(fetchMovies());
  };
}
