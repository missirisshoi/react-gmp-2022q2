import ErrorBoundary from '../../features/ErrorBoundary';
import Header from '../../features/Header';
import Hr from '../../features/Hr';
import Main from '../../features/Main';
import Footer from '../../features/Footer';

const Home = () => (
  <ErrorBoundary>
    <Header />
    <Hr />
    <Main />
    <Footer />
  </ErrorBoundary>
);

export default Home;
