import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../../base/ErrorBoundary';
import Header from '../../features/Header';
import Hr from '../../base/Hr';
import Main from '../../features/Main';
import Footer from '../../features/Footer';
import useToggle from './utils';

const Home = () => {
  const [currentMovieId, setCurrentMovieId] = useState(0);
  const [isMovieDetailsShown, toggleMovieDetails] = useToggle(false);
  const { params } = useParams();

  useEffect(() => {
    toggleMovieDetails(false);
    setCurrentMovieId(0);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [params]);

  const movies = useSelector((store) => store.data);

  const getMovie = () =>
    [...movies].find((movie) => movie.id === currentMovieId);

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
