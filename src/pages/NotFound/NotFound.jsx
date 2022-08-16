import ErrorBoundary from '../../base/ErrorBoundary';
import Footer from '../../features/Footer';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <ErrorBoundary>
    <div className={styles.not_found}>404. The page is not found.</div>
    <Footer />
  </ErrorBoundary>
);

export default NotFound;
