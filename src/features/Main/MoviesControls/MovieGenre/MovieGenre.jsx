import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchMovies, filterMovies } from '../../../../redux/actions';
import styles from './MovieGenre.module.scss';

const MovieGenre = ({ genre }) => {
  const dispatch = useDispatch();

  const handleFilter = (filterBy) => {
    if (filterBy !== 'All') {
      dispatch(filterMovies(filterBy));
    } else {
      dispatch(fetchMovies());
    }
  };

  return (
    <span
      className={genre !== 'All' ? styles.genre_item : styles.genre_item_active}
      onClick={() => handleFilter(genre)}
    >
      {genre}
    </span>
  );
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default MovieGenre;
