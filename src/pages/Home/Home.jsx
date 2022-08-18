import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ErrorBoundary from '../../base/ErrorBoundary';
import Header from '../../features/Header';
import Hr from '../../base/Hr';
import Main from '../../features/Main';
import Footer from '../../features/Footer';
import useToggle from './utils';

const Home = () => {
  const [currentMovieId, setCurrentMovieId] = useState(0);
  const [isMovieDetailsShown, toggleMovieDetails] = useToggle(false);

  const movies = useSelector((store) => store.data);

  const getMovie = () =>
    [...movies].find((movie) => movie.id === currentMovieId) || movies[0];

  const getMovieId = useCallback(
    (id) => {
      setCurrentMovieId(id);
      toggleMovieDetails(true);
    },
    [toggleMovieDetails]
  );

  return (
    <ErrorBoundary>
      <Header
        movie={getMovie()}
        isMovieDetailsShown={isMovieDetailsShown}
        toggleMovieDetails={toggleMovieDetails}
      />
      <Hr />
      <Main getMovieId={getMovieId} />
      <Footer />
    </ErrorBoundary>
  );
};

export default Home;
