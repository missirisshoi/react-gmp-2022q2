import PropTypes from 'prop-types';
import styles from './MovieGenre.module.scss';

const MovieGenre = ({ genre }) => (
  <span
    className={genre !== 'All' ? styles.genre_item : styles.genre_item_active}
  >
    {genre}
  </span>
);

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default MovieGenre;
