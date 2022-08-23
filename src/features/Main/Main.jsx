import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import MoviesControls from './MoviesControls';
import MoviesList from './MoviesList';
import SearchResults from './SearchResults';

const Main = ({ getMovieId }) => (
  <div className={styles.main_wrapper}>
    <MoviesControls />
    <hr className={styles.main_hr} />
    <SearchResults />
    <MoviesList getMovieId={getMovieId} />
  </div>
);

Main.propTypes = {
  getMovieId: PropTypes.func.isRequired,
};

export default Main;
