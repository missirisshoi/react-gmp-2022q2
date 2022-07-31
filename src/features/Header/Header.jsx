import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Logo from '../../base/Logo';
import SearchIcon from '../../base/SearchIcon';

const Header = ({ movie, isMovieDetailsShown, toggleMovieDetails }) => {
  const moviePosterURL = movie.poster_path
    ? movie.poster_path
    : require('../../../public/img/posters/image_not_found.png');

  const handleImgError = (e) => {
    e.target.src = require('../../../public/img/posters/image_not_found.png');
  };

  return (
    <div className={styles.wrapper}>
      {isMovieDetailsShown ? (
        <>
          <div className={styles.nav_wrapper}>
            <Logo />
            <SearchIcon toggleMovieDetails={toggleMovieDetails} />
          </div>
          <div className={styles.movie_detail_wrapper}>
            <img
              src={moviePosterURL}
              onError={handleImgError}
              alt={movie.title}
              className={styles.movie_poster}
            />
            <div className={styles.movie_details}>
              <h2 className={styles.movie_title_wrapper}>
                <span>{movie.title}</span>
                <span className={styles.movie_rating}>
                  {movie.vote_average}
                </span>
              </h2>
              <div className={styles.movie_genre}>
                {movie.genres?.join(', ')}
              </div>
              <div className={styles.movie_year_wrapper}>
                <span>{movie.release_date.split('-')[0]}</span>
                <span>{movie.runtime && `${movie.runtime}m`}</span>
              </div>
              <div className={styles.movie_overview}>{movie.overview}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <Search />
        </>
      )}
    </div>
  );
};

Header.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    url: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }),
  isMovieDetailsShown: PropTypes.bool.isRequired,
  toggleMovieDetails: PropTypes.func.isRequired,
};

Header.defaultProps = {
  movie: {
    genres: [],
    poster_path: '',
    url: '',
    runtime: 0,
    overview: '',
    vote_average: 0,
  },
};

export default Header;
