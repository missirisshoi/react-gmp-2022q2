import Footer from '../../src/features/Footer';
import SimpleHeader from '../../src/features/Header/SimpleHeader/SimpleHeader';
import SimpleMovieCard from '../../src/features/Main/MoviesList/SimpleMovieCard';

const SearchPage = ({movies}) => {
  console.log('movies', movies);
  return (
    <>
      <SimpleHeader />
      <div>Movies</div>
      <ul>
        {movies?.map((movie) => (
          <SimpleMovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
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
