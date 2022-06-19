import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import styles from './MoviesList.module.scss';

const MoviesList = ({ movies }) => (
  <div className={styles.movies_list_wrapper}>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      genre: PropTypes.string,
      year: PropTypes.number,
      poster: PropTypes.string,
      url: PropTypes.string,
      runtime: PropTypes.string,
      overview: PropTypes.string,
      rating: PropTypes.number,
    })
  ).isRequired,
};

export default MoviesList;
