import {
  FETCH_MOVIES,
  FILTER_MOVIES,
  SORT_MOVIES,
  FIND_MOVIES,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
} from '../actionTypes';

const initialState = {
  totalAmount: 6,
  data: [
    {
      id: 1,
      title: 'Pulp Fiction',
      genres: ['Action & Adventure'],
      release_date: '2004-01-01',
      poster_path: 'pulp_fiction.png',
      runtime: 120,
      overview: 'Movie description',
      vote_average: 10,
    },
    {
      id: 2,
      title: 'Bohemian Rhapsody',
      genres: ['Drama, Biography, Music'],
      release_date: '2003-01-01',
      poster_path: 'bohemian_rhapsody.png',
      runtime: 120,
      overview: 'Movie description',
      vote_average: 10,
    },
    {
      id: 3,
      title: 'Kill Bill 2',
      genres: ['Oscar winning movie'],
      release_date: '1994-01-01',
      poster_path: 'kill_bill_2.png',
      runtime: 120,
      overview: 'Movie description',
      vote_average: 10,
    },
    {
      id: 4,
      title: 'Avengers: War of Infinity',
      genres: ['Action & Adventure'],
      release_date: '2004-01-01',
      poster_path: 'avengers.png',
      runtime: 120,
      overview: 'Movie description',
      vote_average: 10,
    },
    {
      id: 5,
      title: 'Inception',
      genres: ['Action & Adventure'],
      release_date: '2003-01-01',
      poster_path: 'inception.png',
      runtime: 120,
      overview: 'Movie description',
      vote_average: 10,
    },
    {
      id: 6,
      title: 'Reservoir Dogs',
      genres: ['Oscar winning movie'],
      release_date: '1994-01-01',
      poster_path: 'reservoir_dogs.png',
      runtime: 120,
      overview: 'Movie description',
      vote_average: 10,
    },
  ],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
    case FILTER_MOVIES:
    case SORT_MOVIES:
    case FIND_MOVIES:
      return {
        data: action.payload.data,
        totalAmount: action.payload.totalAmount,
      };
    case ADD_MOVIE:
    case EDIT_MOVIE:
    case DELETE_MOVIE:
    default:
      return state;
  }
};

export default moviesReducer;
