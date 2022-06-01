import styles from './App.module.scss';
import webpackImg from './webpack_img.webp';

const App = () => (
  <>
    <h1 className={styles.App}>This is the React App!</h1>
    <img src={webpackImg} alt="Webpack" />
  </>
);

export default App;
