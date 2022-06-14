import styles from './Main.module.scss';
import MoviesControls from './MoviesControls';
import MoviesList from './MoviesList';
import SearchResults from './SearchResults';

const Main = () => (
  <div className={styles.main_wrapper}>
    <MoviesControls />
    <hr className={styles.main_hr} />
    <SearchResults />
    <MoviesList />
  </div>
);

export default Main;
