import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Modal from '../../../../../base/Modal';
import { addMovie } from '../../../../../redux/actions';
import styles from './AddMovie.module.scss';

const dateRX =
  /^[1|2]\d{3}-([0][1-9]|[1][0-2])-([0][1-9]|[1-2][0-9]|[3][0-1])$/;
const ratingRX = /^\d{1,2}(\.\d)?$/;

const AddMovie = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSent, setShowSent] = useState(false);

  const dispatch = useDispatch();

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

  return (
    <>
      <button
        className={styles.add_btn}
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        + ADD MOVIE
      </button>
      <Modal
        headerText="Add movie"
        type="add"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Formik
          initialValues={{
            title: '',
            release_date: '',
            poster_path: '',
            vote_average: 0,
            genres: '',
            runtime: 0,
            overview: '',
          }}
          onSubmit={async (values) => {
            dispatch(addMovie(values));
            setShowSent(true);
            setTimeout(() => setShowSent(false), 3000);
          }}
          validateOnBlur
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
          }) => (
            <>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {touched.title && errors.title && <p>{errors.title}</p>}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.release_date}
                  />
                  {touched.release_date && <p>{errors.release_date}</p>}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.poster_path}
                  />
                  {touched.poster_path && errors.poster_path && (
                    <p>{errors.poster_path}</p>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.vote_average}
                  />
                  {touched.vote_average && errors.vote_average && (
                    <p>{errors.vote_average}</p>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.genres}
                  />
                  {touched.genres && errors.genres && <p>{errors.genres}</p>}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.runtime}
                  />
                  {touched.runtime && errors.runtime && <p>{errors.runtime}</p>}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.overview}
                  />
                  {touched.overview && errors.overview && (
                    <p>{errors.overview}</p>
                  )}
                </div>
              </div>
              <div className={styles.modal_btns}>
                <button
                  className={styles.modal_btn_secondary}
                  type="button"
                  onClick={resetForm}
                >
                  Reset
                </button>
                <button
                  className={styles.modal_btn}
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  {showSent ? 'Submitted' : 'Submit'}
                </button>
              </div>
            </>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default AddMovie;
