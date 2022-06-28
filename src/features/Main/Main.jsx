import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import MoviesControls from './MoviesControls';
import MoviesList from './MoviesList';
import SearchResults from './SearchResults';

const Main = ({ movies, getMovieId }) => {
  const [sortBy, setSortBy] = useState('');
  const [moviesArr, setMoviesArr] = useState(movies);

  const handleSort = (value) => {
    setSortBy(value);
  };

  useEffect(() => {
    const sorted = [...movies].sort((a, b) => a[sortBy] > b[sortBy]);
    setMoviesArr(sorted);
  }, [sortBy, movies]);

  return (
    <div className={styles.main_wrapper}>
      <MoviesControls handleSort={handleSort} />
      <hr className={styles.main_hr} />
      <SearchResults />
      <MoviesList movies={moviesArr} getMovieId={getMovieId} />
    </div>
  );
};

Main.propTypes = {
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
  getMovieId: PropTypes.func.isRequired,
};

export default Main;
