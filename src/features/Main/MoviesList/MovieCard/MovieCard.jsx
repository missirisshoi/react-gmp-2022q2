import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../../../../base/Modal';
import styles from './MovieCard.module.scss';

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({
    headerText: 'Edit movie',
    type: 'edit',
    movie,
  });
  const [movieMenuState, toggleMovieMenuState] = useState(false);
  const movieMenuItemsCN = `${styles.movie_menu_items} ${
    movieMenuState ? styles.movie_menu_items_shown : ''
  }`;

  const moviePosterURL = movie.poster ? movie.poster : 'pulp_fiction.png';

  const handleBtnClick = (type) => {
    toggleMovieMenuState(false);
    if (type === 'delete') {
      setModalProps({ headerText: 'Delete movie', type: 'delete', movie });
    } else {
      setModalProps({ headerText: 'Edit movie', type: 'edit', movie });
    }
    setShowModal(!showModal);
  };

  return (
    <div className={styles.movie_card}>
      <div
        className={styles.movie_menu}
        onClick={() => toggleMovieMenuState(!movieMenuState)}
      >
        ...
      </div>
      <div className={movieMenuItemsCN}>
        <div
          className={styles.movie_menu_item}
          onClick={() => handleBtnClick('edit')}
        >
          Edit
        </div>
        <div
          className={styles.movie_menu_item}
          onClick={() => handleBtnClick('delete')}
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
      <Modal
        {...modalProps}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
