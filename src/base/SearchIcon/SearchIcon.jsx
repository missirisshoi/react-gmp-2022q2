import PropTypes from 'prop-types';
import styles from './SearchIcon.module.scss';

const SearchIcon = ({ toggleMovieDetails }) => (
  <div className={styles.search_icon} onClick={() => toggleMovieDetails()}>
    &#128270;
  </div>
);

SearchIcon.propTypes = {
  toggleMovieDetails: PropTypes.func.isRequired,
};

export default SearchIcon;
