import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateMoviesList } from '../../../../redux/actions';
import styles from './Search.module.scss';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const { params } = useParams();
  const navigate = useNavigate();

  const handleSearchFn = (values) => {
    const sortBy = params
      ?.split('&')
      ?.find((v) => v?.split('=')[0] === 'sortBy')
      ?.split('=')[1];
    const filterBy = params
      ?.split('&')
      ?.find((v) => v?.split('=')[0] === 'filter')
      ?.split('=')[1];
    if (values?.movie_title) {
      const url = params?.includes('search')
        ? params
            .split('&')
            .map((el) =>
              el?.split('=')[0] === 'search'
                ? `search=${values?.movie_title}`
                : el
            )
            .join('&')
        : params
        ? `${params}&search=${values?.movie_title}`
        : `search=${values?.movie_title}`;
      navigate(`/search/${url}`);
    } else if (values?.movie_title === '') {
      dispatch(updateMoviesList(undefined, sortBy, filterBy));
      const url = params
        ?.split('&')
        .filter((el) => !el.includes('search'))
        .join('&');
      navigate(`/search/${url}`);
    } else {
      dispatch(updateMoviesList(values, sortBy, filterBy));
    }
  };

  useEffect(() => {
    const val = params
      ?.split('&')
      ?.find((v) => v.split('=')[0] === 'search')
      ?.split('=')[1];
    if (val !== searchValue) {
      setSearchValue(() => val);
      handleSearchFn(val);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [params]);

  const formik = useFormik({
    initialValues: {
      movie_title: searchValue || '',
    },
    onSubmit: async (values) => {
      handleSearchFn(values);
    },
    enableReinitialize: true,
  });

  return (
    <div className={styles.search_wrapper}>
      <p className={styles.find_txt}>FIND YOUR MOVIE</p>
      <form action="" className={styles.search_form}>
        <input
          type="text"
          name="movie_title"
          onChange={formik.handleChange}
          placeholder="What do you want to watch?"
          className={styles.input_txt}
          value={formik.values.movie_title}
          data-test-id="search-field"
        />
        <input
          type="submit"
          value="SEARCH"
          onClick={formik.handleSubmit}
          className={styles.input_btn}
          disabled={formik.isSubmitting}
          data-test-id="search-button"
        />
      </form>
    </div>
  );
};

export default Search;
