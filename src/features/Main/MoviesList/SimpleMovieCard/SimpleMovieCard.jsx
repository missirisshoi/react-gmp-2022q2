import styles from './SimpleMovieCard.module.scss';

const SimpleMovieCard = ({ movie }) => (
  <div className={styles.movie_card}>
    <img
      src={movie.poster_path}
      alt={movie.title}
      className={styles.movie_poster}
    />
    <div className={styles.movie_details}>
      <span className={styles.movie_title}>{movie.title}</span>
      <span className={styles.movie_year}>{movie.year}</span>
    </div>
    <div className={styles.movie_genre}>{movie.genre}</div>
  </div>
);

export default SimpleMovieCard;
