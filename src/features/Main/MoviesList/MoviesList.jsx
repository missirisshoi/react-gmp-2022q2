import MovieCard from './MovieCard';
import styles from './MoviesList.module.scss';

const movies = [
  {
    id: 1,
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    year: 2004,
    poster: 'pulp_fiction.png',
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biography, Music',
    year: 2003,
    poster: 'bohemian_rhapsody.png',
  },
  {
    id: 3,
    title: 'Kill Bill 2',
    genre: 'Oscar winning movie',
    year: 1994,
    poster: 'kill_bill_2.png',
  },
  {
    id: 4,
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    year: 2004,
    poster: 'avengers.png',
  },
  {
    id: 5,
    title: 'Inception',
    genre: 'Action & Adventure',
    year: 2003,
    poster: 'inception.png',
  },
  {
    id: 6,
    title: 'Reservoir Dogs',
    genre: 'Oscar winning movie',
    year: 1994,
    poster: 'reservoir_dogs.png',
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
