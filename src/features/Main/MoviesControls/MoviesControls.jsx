import MovieGenre from './MovieGenre/MovieGenre';
import styles from './MoviesControls.module.scss';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const MoviesControls = () => (
  <div className={styles.movie_controls_wrapper}>
    <div className={styles.movie_genre_list}>
      {genres.map((genre) => (
        <MovieGenre key={genre} genre={genre} />
      ))}
    </div>
    <div>
      <span className={styles.sort_span}>SORT BY</span>
      <select id="sort" name="sort" className={styles.sort_select}>
        <option value="year" defaultValue>
          Release date
        </option>
        <option value="title">Title</option>
        <option value="genre">Genre</option>
      </select>
    </div>
  </div>
);

export default MoviesControls;
