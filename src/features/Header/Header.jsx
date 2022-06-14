import styles from './Header.module.scss';
import Navbar from './components/Navbar';
import Search from './components/Search';

const Header = () => (
  <div className={styles.wrapper}>
    <Navbar />
    <Search />
  </div>
);

export default Header;
