import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../../../../base/Modal';
import styles from './MovieCard.module.scss';

const MovieCard = ({ movie, getMovieId }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isMovieMenuOpened, toggleMovieMenu] = useState(false);
  const movieMenuItemsCN = `${styles.movie_menu_items} ${
    isMovieMenuOpened ? styles.movie_menu_items_shown : ''
  }`;

  const moviePosterURL = movie.poster ? movie.poster : 'pulp_fiction.png';

  const handleBtnClick = (type) => {
    toggleMovieMenu(false);
    if (type === 'delete') {
      setShowDeleteModal(!showDeleteModal);
    } else {
      setShowEditModal(!showEditModal);
    }
  };

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
          <div
            className={styles.movie_menu_item}
            onClick={(e) => {
              e.stopPropagation();
              handleBtnClick('edit');
            }}
          >
            Edit
          </div>
          <div
            className={styles.movie_menu_item}
            onClick={(e) => {
              e.stopPropagation();
              handleBtnClick('delete');
            }}
          >
            Delete
          </div>
        </div>
        <img
          src={require(`../../../../../public/img/posters/${moviePosterURL}`)}
          alt={movie.title}
          className={styles.movie_poster}
        />
        <div className={styles.movie_details}>
          <span className={styles.movie_title}>{movie.title}</span>
          <span className={styles.movie_year}>{movie.year}</span>
        </div>
        <div className={styles.movie_genre}>{movie.genre}</div>
      </div>
      <Modal
        headerText="Edit movie"
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      >
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
      </Modal>
      <Modal
        headerText="Delete movie"
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
      >
        <p>Are you sure you want to delete this movie?</p>
        <button className={styles.modal_btn} type="button">
          Confirm
        </button>
      </Modal>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  getMovieId: PropTypes.func.isRequired,
};

export default MovieCard;
