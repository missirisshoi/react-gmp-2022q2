import { useSelector } from 'react-redux';
import styles from './SearchResults.module.scss';

const SearchResults = () => {
  const totalAmount = useSelector((store) => store.totalAmount);

  return (
    <div className={styles.search_results_wrapper}>
      <span className={styles.search_results_span} data-test-id="search-amount">
        {totalAmount}
      </span> movies found
    </div>
  );
};

export default SearchResults;
