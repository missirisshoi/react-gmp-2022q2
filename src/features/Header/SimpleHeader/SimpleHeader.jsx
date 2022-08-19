import styles from './SimpleHeader.module.scss';
import SimpleNavbar from './SimpleNavbar';

const SimpleHeader = () => (
  <div className={styles.wrapper}>
    <SimpleNavbar />
    <div className={styles.search_wrapper}>
      <p className={styles.find_txt}>FIND YOUR MOVIE</p>
      <form action="" className={styles.search_form}>
        <input
          type="text"
          defaultValue="What do you want to watch?"
          className={styles.input_txt}
        />
        <input
          type="submit"
          value="SEARCH"
          onClick={(e) => e.preventDefault()}
          className={styles.input_btn}
        />
      </form>
    </div>
  </div>
);

export default SimpleHeader;
