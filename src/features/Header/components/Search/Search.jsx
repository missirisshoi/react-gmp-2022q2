import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { findMovies } from '../../../../redux/actions';
import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      movie_title: '',
    },
    onSubmit: async (values) => {
      dispatch(findMovies(values.movie_title));
    },
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
        />
        <input
          type="submit"
          value="SEARCH"
          onClick={formik.handleSubmit}
          className={styles.input_btn}
          disabled={formik.isSubmitting}
        />
      </form>
    </div>
  );
};

export default Search;
