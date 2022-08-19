import Footer from '../../src/features/Footer';
import SimpleHeader from '../../src/features/Header/SimpleHeader/SimpleHeader';
import SimpleMain from '../../src/features/Main/SimpleMain/SimpleMain';

const SearchPage = ({movies}) => {
  return (
    <>
      <SimpleHeader />
      <SimpleMain movies={movies} />
      <Footer />
    </>
  );
};

export default SearchPage;

export async function getServerSideProps(context) {
  const fetchedMovies = await fetch('http://localhost:4000/movies?limit=15');
  const json = await fetchedMovies.json();
  const movies = json.data;

  return {
    props: {movies},
  }
};
