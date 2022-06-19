import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ type, headerText, showModal, setShowModal, movie = {} }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className={styles.modal_wrapper} onClick={() => setShowModal(false)}>
      <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h2 className={styles.modal_header_h2}>{headerText}</h2>
          <span
            className={styles.modal_close}
            onClick={() => setShowModal(false)}
          >
            x
          </span>
        </div>
        {type === 'delete' ? (
          <>
            <p>Are you sure you want to delete this movie?</p>
            <button className={styles.modal_btn} type="button">
              Confirm
            </button>
          </>
        ) : (
          <>
            <div className={styles.modal_content}>
              <div className={styles.form_field_wrapper}>
                <label htmlFor="m_title" className={styles.modal_label}>
                  Title
                </label>
                <input
                  type="text"
                  id="m_title"
                  name="m_title"
                  className={styles.modal_input}
                  defaultValue={movie.title}
                />
              </div>
              <div className={styles.form_field_wrapper}>
                <label htmlFor="m_year" className={styles.modal_label}>
                  Release date
                </label>
                <input
                  type="text"
                  id="m_year"
                  name="m_year"
                  className={styles.modal_input}
                  defaultValue={movie.year}
                />
              </div>
              <div className={styles.form_field_wrapper}>
                <label htmlFor="m_url" className={styles.modal_label}>
                  Url
                </label>
                <input
                  type="text"
                  id="m_url"
                  name="m_url"
                  className={styles.modal_input}
                  defaultValue={movie.url}
                />
              </div>
              <div className={styles.form_field_wrapper}>
                <label htmlFor="m_rating" className={styles.modal_label}>
                  Rating
                </label>
                <input
                  type="text"
                  id="m_rating"
                  name="m_rating"
                  className={styles.modal_input}
                  defaultValue={movie.rating}
                />
              </div>
              <div className={styles.form_field_wrapper}>
                <label htmlFor="m_genre" className={styles.modal_label}>
                  Genre
                </label>
                <input
                  type="text"
                  id="m_genre"
                  name="m_genre"
                  className={styles.modal_input}
                  defaultValue={movie.genre}
                />
              </div>
              <div className={styles.form_field_wrapper}>
                <label htmlFor="m_runtime" className={styles.modal_label}>
                  Runtime
                </label>
                <input
                  type="text"
                  id="m_runtime"
                  name="m_runtime"
                  className={styles.modal_input}
                  defaultValue={movie.runtime}
                />
              </div>
              <div className={styles.form_field_wrapper}>
                <label htmlFor="m_overview" className={styles.modal_label}>
                  Overview
                </label>
                <textarea
                  name="m_overview"
                  id="m_overview"
                  cols="80"
                  rows="4"
                  className={styles.modal_textarea}
                  defaultValue={movie.overview}
                />
              </div>
            </div>
            <div className={styles.modal_btns}>
              <button className={styles.modal_btn_secondary} type="button">
                Reset
              </button>
              <button className={styles.modal_btn} type="button">
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    poster: PropTypes.string,
    url: PropTypes.string,
    runtime: PropTypes.string,
    overview: PropTypes.string,
    rating: PropTypes.number,
  }),
};

Modal.defaultProps = {
  movie: {
    id: 1,
    title: '',
    genre: '',
    year: 0,
    poster: '',
    url: '',
    runtime: '',
    overview: '',
    rating: 0,
  },
};

export default Modal;
