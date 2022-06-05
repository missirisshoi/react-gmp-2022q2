import PropTypes from 'prop-types';
import styles from './MovieCard.module.scss';

const MovieCard = ({ movie }) => (
  <div className={styles.movie_card}>
    <img
      src={require(`../../../../../public/img/posters/${movie.poster}`)}
      alt={movie.title}
      className={styles.movie_poster}
    />
    <div className={styles.movie_details}>
      <span className={styles.movie_title}>{movie.title}</span>
      <span className={styles.movie_year}>{movie.year}</span>
    </div>
    <div className={styles.movie_genre}>{movie.genre}</div>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
