import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Modal from '../../../../base/Modal';
import { editMovie, deleteMovie } from '../../../../redux/actions';
import styles from './MovieCard.module.scss';

const dateRX =
  /^[1|2]\d{3}-([0][1-9]|[1][0-2])-([0][1-9]|[1-2][0-9]|[3][0-1])$/;
const ratingRX = /^\d{1,2}(\.\d)?$/;

const MovieCard = ({ movie, getMovieId }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isMovieMenuOpened, toggleMovieMenu] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const dispatch = useDispatch();

  const movieMenuItemsCN = `${styles.movie_menu_items} ${
    isMovieMenuOpened ? styles.movie_menu_items_shown : ''
  }`;

  const moviePosterURL = movie.poster_path
    ? movie.poster_path
    : require('../../../../../public/img/posters/image_not_found.png');

  const releaseYear = movie.release_date?.split('-')[0];

  const genres = movie.genres?.join(', ');

  const handleImgError = (e) => {
    e.target.src = require('../../../../../public/img/posters/image_not_found.png');
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    toggleMovieMenu(false);
    setShowEditModal(!showEditModal);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    toggleMovieMenu(false);
    setShowDeleteModal(!showDeleteModal);
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required.'),
    release_date: yup
      .string()
      .matches(dateRX, 'Must be a valid YYYY-MM-DD date.'),
    poster_path: yup.string().required('Poster url is required.'),
    vote_average: yup
      .number()
      .typeError('Rating must be a number.')
      .min(0, 'Rating must not be less than 0.')
      .max(10, 'Rating must not be more than 10.')
      .test('is-decimal', 'Must be integer or decimal.', (value) =>
        `${value}`.match(ratingRX)
      ),
    genres: yup.string().required('Genre(s) is required.'),
    runtime: yup
      .number()
      .typeError('Runtime must be a number.')
      .integer('Runtime must be an integer.')
      .min(0, 'Runtime must not be less than 0.')
      .required('Runtime is required.'),
    overview: yup.string().required('Movie overview is required.'),
  });

  const formik = useFormik({
    initialValues: {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      genres: movie.genres?.join(', '),
      runtime: movie.runtime || 0,
      overview: movie.overview,
    },
    onSubmit: async (values) => {
      dispatch(editMovie({ ...values, id: movie.id }));
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    },
    validateOnBlur: true,
    validationSchema,
  });

  const formikDel = useFormik({
    initialValues: {},
    onSubmit: async () => {
      dispatch(deleteMovie(movie.id));
      setIsDeleted(true);
      setTimeout(() => {
        setIsDeleted(false);
      }, 3000);
    },
  });

  return (
    <>
      <div className={styles.movie_card} onClick={() => getMovieId(movie.id)}>
        <div
          className={styles.movie_menu}
          onClick={(e) => {
            e.stopPropagation();
            toggleMovieMenu(!isMovieMenuOpened);
          }}
        >
          ...
        </div>
        <div className={movieMenuItemsCN}>
          <div className={styles.movie_menu_item} onClick={handleEdit}>
            Edit
          </div>
          <div className={styles.movie_menu_item} onClick={handleDelete}>
            Delete
          </div>
        </div>
        <img
          src={moviePosterURL}
          onError={handleImgError}
          alt={movie.title}
          className={styles.movie_poster}
          width="322"
          height="455"
        />
        <div className={styles.movie_details}>
          <span className={styles.movie_title}>{movie.title}</span>
          <span className={styles.movie_year}>{releaseYear}</span>
        </div>
        <div className={styles.movie_genre}>{genres}</div>
      </div>
      <Modal
        headerText="Edit movie"
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      >
        <div className={styles.modal_content}>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="title" className={styles.modal_label}>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className={styles.modal_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title && (
              <p>{formik.errors.title}</p>
            )}
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="release_date" className={styles.modal_label}>
              Release date
            </label>
            <input
              type="text"
              id="release_date"
              name="release_date"
              className={styles.modal_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.release_date}
            />
            {formik.touched.release_date && <p>{formik.errors.release_date}</p>}
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="poster_path" className={styles.modal_label}>
              Poster url
            </label>
            <input
              type="text"
              id="poster_path"
              name="poster_path"
              className={styles.modal_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.poster_path}
            />
            {formik.touched.poster_path && formik.errors.poster_path && (
              <p>{formik.errors.poster_path}</p>
            )}
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="vote_average" className={styles.modal_label}>
              Rating
            </label>
            <input
              type="text"
              id="vote_average"
              name="vote_average"
              className={styles.modal_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.vote_average}
            />
            {formik.touched.vote_average && formik.errors.vote_average && (
              <p>{formik.errors.vote_average}</p>
            )}
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="genres" className={styles.modal_label}>
              Genre(s)
            </label>
            <input
              type="text"
              id="genres"
              name="genres"
              className={styles.modal_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.genres}
            />
            {formik.touched.genres && formik.errors.genres && (
              <p>{formik.errors.genres}</p>
            )}
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="runtime" className={styles.modal_label}>
              Runtime
            </label>
            <input
              type="text"
              id="runtime"
              name="runtime"
              className={styles.modal_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.runtime}
            />
            {formik.touched.runtime && formik.errors.runtime && (
              <p>{formik.errors.runtime}</p>
            )}
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="overview" className={styles.modal_label}>
              Overview
            </label>
            <textarea
              name="overview"
              id="overview"
              cols="80"
              rows="4"
              className={styles.modal_textarea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.overview}
            />
            {formik.touched.overview && formik.errors.overview && (
              <p>{formik.errors.overview}</p>
            )}
          </div>
        </div>
        <div className={styles.modal_btns}>
          <button
            className={styles.modal_btn_secondary}
            type="button"
            onClick={formik.resetForm}
          >
            Reset
          </button>
          <button
            className={styles.modal_btn}
            type="button"
            disabled={formik.isSubmitting}
            onClick={formik.handleSubmit}
          >
            {isSent ? 'Submitted' : 'Submit'}
          </button>
        </div>
      </Modal>
      <Modal
        headerText="Delete movie"
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
      >
        <p>Are you sure you want to delete this movie?</p>
        <button
          className={styles.modal_btn}
          type="button"
          disabled={formikDel.isSubmitting}
          onClick={formikDel.handleSubmit}
        >
          {isDeleted ? 'Deleted' : 'Confirm'}
        </button>
      </Modal>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    poster_path: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
  getMovieId: PropTypes.func.isRequired,
};

export default MovieCard;
