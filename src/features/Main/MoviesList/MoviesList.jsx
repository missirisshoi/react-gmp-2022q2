import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../../redux/actions';
import MovieCard from './MovieCard';
import styles from './MoviesList.module.scss';

const MoviesList = ({ getMovieId }) => {
  const [moviesArray, setMoviesArray] = useState([]);
  const dispatch = useDispatch();
  const fetchedMovies = useSelector((store) => store.data);

  useEffect(() => {
    dispatch(fetchMovies());
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  useEffect(() => {
    setMoviesArray(fetchedMovies);
  }, [fetchedMovies]);

  return (
    <div className={styles.movies_list_wrapper}>
      {moviesArray.map((movie) => (
        <MovieCard key={movie.id} movie={movie} getMovieId={getMovieId} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  getMovieId: PropTypes.func.isRequired,
};

export default MoviesList;
