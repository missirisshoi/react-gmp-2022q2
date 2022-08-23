import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import MovieGenre from './MovieGenre/MovieGenre';
import styles from './MoviesControls.module.scss';
import { updateMoviesList } from '../../../redux/actions';

const genres = [
  'All',
  'Documentary',
  'Comedy',
  'Horror',
  'Crime',
  'Adventure',
  'Action',
  'Fantasy',
];

const MoviesControls = () => {
  const [sortByValue, setSortByValue] = useState('');
  const dispatch = useDispatch();
  const { params } = useParams();
  const navigate = useNavigate();

  const handleSort = (sortBy) => {
    const searchBy = params
      ?.split('&')
      ?.find((v) => v?.split('=')[0] === 'search')
      ?.split('=')[1];
    const filterBy = params
      ?.split('&')
      ?.find((v) => v?.split('=')[0] === 'filter')
      ?.split('=')[1];
    dispatch(updateMoviesList(searchBy, sortBy, filterBy));
    const url = params?.includes('sortBy')
      ? params
          ?.split('&')
          ?.map((el) =>
            el?.split('=')[0] === 'sortBy' ? `sortBy=${sortBy}` : el
          )
          ?.join('&')
      : params
      ? `${params}&sortBy=${sortBy}`
      : `&sortBy=${sortBy}`;
    navigate(`/search/${url}`);
  };

  useEffect(() => {
    const sortVal = params
      ?.split('&')
      ?.find((v) => v?.split('=')[0] === 'sortBy')
      ?.split('=')[1];
    if (sortVal && sortVal !== sortByValue) {
      setSortByValue(() => sortVal);
      handleSort(sortVal);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [params]);

  return (
    <div className={styles.movie_controls_wrapper}>
      <div className={styles.movie_genre_list}>
        {genres.map((genre) => (
          <MovieGenre key={genre} genre={genre} />
        ))}
      </div>
      <div>
        <span className={styles.sort_span}>SORT BY</span>
        <select
          id="sort"
          name="sort"
          className={styles.sort_select}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option
            value="release_date"
            defaultValue
            selected={sortByValue !== 'vote_average'}
          >
            Release date
          </option>
          <option
            value="vote_average"
            selected={sortByValue === 'vote_average'}
          >
            Rating
          </option>
        </select>
      </div>
    </div>
  );
};

export default MoviesControls;
