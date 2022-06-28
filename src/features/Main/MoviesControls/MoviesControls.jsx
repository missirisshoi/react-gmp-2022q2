import PropTypes from 'prop-types';
import MovieGenre from './MovieGenre/MovieGenre';
import styles from './MoviesControls.module.scss';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const MoviesControls = ({ handleSort }) => (
  <div className={styles.movie_controls_wrapper}>
    <div className={styles.movie_genre_list}>
      {genres.map((genre) => (
        <MovieGenre key={genre} genre={genre} />
      ))}
    </div>
    <div>
      <span className={styles.sort_span}>SORT BY</span>
      <select
        id="sort"
        name="sort"
        className={styles.sort_select}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="year" defaultValue>
          Release date
        </option>
        <option value="title">Title</option>
        <option value="genre">Genre</option>
      </select>
    </div>
  </div>
);

MoviesControls.propTypes = {
  handleSort: PropTypes.func.isRequired,
};

export default MoviesControls;
