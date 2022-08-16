import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateMoviesList } from '../../../../redux/actions';
import styles from './MovieGenre.module.scss';

const MovieGenre = ({ genre }) => {
  const [currentGenre, setCurrentGenre] = useState('All');
  const dispatch = useDispatch();
  const { params } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const filterBy = params
      ?.split('&')
      ?.find((v) => v?.split('=')[0] === 'filter')
      ?.split('=')[1];
    if (genre === filterBy) {
      setCurrentGenre(filterBy);
    } else if (filterBy) {
      setCurrentGenre('');
    } else {
      setCurrentGenre('All');
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [params]);

  const handleFilter = (filterBy) => {
    const url = params?.includes('filter')
      ? params
          ?.split('&')
          ?.map((el) =>
            el?.split('=')[0] === 'filter' ? `filter=${filterBy}` : el
          )
          ?.join('&')
      : params
      ? `${params}&filter=${filterBy}`
      : `filter=${filterBy}`;
    navigate(`/search/${url}`);

    const searchBy = params
      ?.split('&')
      ?.find((v) => v?.split('=')[0] === 'search')
      ?.split('=')[1];
    const sortBy = params
      ?.split('&')
      ?.find((v) => v?.split('=')[0] === 'sortBy')
      ?.split('=')[1];
    dispatch(updateMoviesList(searchBy, sortBy, filterBy));
  };

  return (
    <span
      className={
        genre === currentGenre ? styles.genre_item_active : styles.genre_item
      }
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
