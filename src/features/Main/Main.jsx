import styles from './Main.module.scss';
import MoviesList from './MoviesList/MoviesList';

const Main = () => (
  <div className={styles.main_wrapper}>
    <MoviesList />
  </div>
);

export default Main;
