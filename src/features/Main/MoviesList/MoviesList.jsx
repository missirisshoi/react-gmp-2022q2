import MovieCard from './MovieCard';
import styles from './MoviesList.module.scss';

const movies = [
  {
    id: 1,
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    year: 2004,
    poster: 'pulp_fiction.png',
    url: 'movie_url',
    runtime: '120m',
    overview: 'Movie description',
    rating: 10,
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biography, Music',
    year: 2003,
    poster: 'bohemian_rhapsody.png',
    url: 'movie_url',
    runtime: '120m',
    overview: 'Movie description',
    rating: 10,
  },
  {
    id: 3,
    title: 'Kill Bill 2',
    genre: 'Oscar winning movie',
    year: 1994,
    poster: 'kill_bill_2.png',
    url: 'movie_url',
    runtime: '120m',
    overview: 'Movie description',
    rating: 10,
  },
  {
    id: 4,
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    year: 2004,
    poster: 'avengers.png',
    url: 'movie_url',
    runtime: '120m',
    overview: 'Movie description',
    rating: 10,
  },
  {
    id: 5,
    title: 'Inception',
    genre: 'Action & Adventure',
    year: 2003,
    poster: 'inception.png',
    url: 'movie_url',
    runtime: '120m',
    overview: 'Movie description',
    rating: 10,
  },
  {
    id: 6,
    title: 'Reservoir Dogs',
    genre: 'Oscar winning movie',
    year: 1994,
    poster: 'reservoir_dogs.png',
    url: 'movie_url',
    runtime: '120m',
    overview: 'Movie description',
    rating: 10,
  },
];

const MoviesList = () => (
  <div className={styles.movies_list_wrapper}>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

export default MoviesList;
