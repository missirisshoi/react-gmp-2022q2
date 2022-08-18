import { FETCH_MOVIES, FILTER_MOVIES, SORT_MOVIES } from '../actionTypes';

const initialState = [
  {
    id: 1,
    title: 'Pulp Fiction',
    genres: ['Action & Adventure'],
    release_date: '2004-1-1',
    poster_path: 'pulp_fiction.png',
    url: 'movie_url',
    runtime: 120,
    overview: 'Movie description',
    vote_average: 10,
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    genres: ['Drama, Biography, Music'],
    release_date: '2003-1-1',
    poster_path: 'bohemian_rhapsody.png',
    url: 'movie_url',
    runtime: 120,
    overview: 'Movie description',
    vote_average: 10,
  },
  {
    id: 3,
    title: 'Kill Bill 2',
    genres: ['Oscar winning movie'],
    release_date: '1994-1-1',
    poster_path: 'kill_bill_2.png',
    url: 'movie_url',
    runtime: 120,
    overview: 'Movie description',
    vote_average: 10,
  },
  {
    id: 4,
    title: 'Avengers: War of Infinity',
    genres: ['Action & Adventure'],
    release_date: '2004-1-1',
    poster_path: 'avengers.png',
    url: 'movie_url',
    runtime: 120,
    overview: 'Movie description',
    vote_average: 10,
  },
  {
    id: 5,
    title: 'Inception',
    genres: ['Action & Adventure'],
    release_date: '2003-1-1',
    poster_path: 'inception.png',
    url: 'movie_url',
    runtime: 120,
    overview: 'Movie description',
    vote_average: 10,
  },
  {
    id: 6,
    title: 'Reservoir Dogs',
    genres: ['Oscar winning movie'],
    release_date: '1994-1-1',
    poster_path: 'reservoir_dogs.png',
    url: 'movie_url',
    runtime: 120,
    overview: 'Movie description',
    vote_average: 10,
  },
];

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return [...action.payload];
    case FILTER_MOVIES:
      return [...action.payload];
    case SORT_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default moviesReducer;
