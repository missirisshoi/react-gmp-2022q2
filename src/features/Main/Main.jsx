import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Main.module.scss';
import MoviesControls from './MoviesControls';
import MoviesList from './MoviesList';
import SearchResults from './SearchResults';
import { sortMovies } from '../../redux/actions';

const Main = ({ getMovieId }) => {
  const [sortBy, setSortBy] = useState('release_date');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortMovies(sortBy));
  }, [sortBy, dispatch]);

  return (
    <div className={styles.main_wrapper}>
      <MoviesControls handleSort={setSortBy} />
      <hr className={styles.main_hr} />
      <SearchResults />
      <MoviesList getMovieId={getMovieId} />
    </div>
  );
};

Main.propTypes = {
  getMovieId: PropTypes.func.isRequired,
};

export default Main;
