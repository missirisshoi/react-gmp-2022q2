import styles from './Navbar.module.scss';
import Logo from '../../../../base/Logo';
import AddMovie from './AddMovie';

const Navbar = () => (
  <div className={styles.nav_wrapper}>
    <Logo />
    <AddMovie />
  </div>
);

export default Navbar;
