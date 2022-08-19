import styles from './SimpleMovieCard.module.scss';

const SimpleMovieCard = ({ movie }) => {
  const year = movie.release_date.split('-')[0];
  const genre = movie.genres.join(', ');

  return (
    <div className={styles.movie_card}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.movie_poster}
      />
      <div className={styles.movie_details}>
        <span className={styles.movie_title}>{movie.title}</span>
        <span className={styles.movie_year}>{year}</span>
      </div>
      <div className={styles.movie_genre}>{genre}</div>
    </div>
  );
};

export default SimpleMovieCard;
