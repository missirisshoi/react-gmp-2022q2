import styles from './SimpleNavbar.module.scss';
import Logo from '../../../../base/Logo';

const SimpleNavbar = () => (
  <div className={styles.nav_wrapper}>
    <Logo />
    <button className={styles.add_btn} type="button">
      + ADD MOVIE
    </button>
  </div>
);

export default SimpleNavbar;
