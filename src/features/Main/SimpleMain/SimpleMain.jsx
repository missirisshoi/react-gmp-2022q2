import styles from './SimpleMain.module.scss';
import SimpleMovieCard from '../MoviesList/SimpleMovieCard';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const SimpleMain = ({ movies }) => (
  <div className={styles.main_wrapper}>
    <div className={styles.movie_controls_wrapper}>
      <div className={styles.movie_genre_list}>
        {genres.map((genre) => (
          <span
            className={genre !== 'All' ? styles.genre_item : styles.genre_item_active}
            key={genre}
          >
            {genre}
          </span>
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
    <hr className={styles.main_hr} />
    <div className={styles.search_results_wrapper}>
      <span className={styles.search_results_span}>15</span> movies found
    </div>
    <div className={styles.movies_list_wrapper}>
      {movies?.map((movie) => (
        <SimpleMovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

export default SimpleMain;
