import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Logo from '../../base/Logo';
import SearchIcon from '../../base/SearchIcon';

const Header = ({ movie, isMovieDetailsShown, toggleMovieDetails }) => {
  const moviePosterURL = movie?.poster || 'pulp_fiction.png';

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
              src={require(`../../../public/img/posters/${moviePosterURL}`)}
              alt={movie.title}
              className={styles.movie_poster}
            />
            <div className={styles.movie_details}>
              <h2 className={styles.movie_title_wrapper}>
                <span>{movie.title}</span>
                <span className={styles.movie_rating}>{movie.rating}</span>
              </h2>
              <div className={styles.movie_genre}>{movie.genre}</div>
              <div className={styles.movie_year_wrapper}>
                <span>{movie.year}</span>
                <span>{movie.runtime}</span>
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
  isMovieDetailsShown: PropTypes.bool.isRequired,
  toggleMovieDetails: PropTypes.func.isRequired,
};

Header.defaultProps = {
  movie: {
    id: 0,
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

export default Header;
