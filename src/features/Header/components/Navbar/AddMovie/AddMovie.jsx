import { useState } from 'react';
import Modal from '../../../../../base/Modal';
import styles from './AddMovie.module.scss';

const AddMovie = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={styles.add_btn}
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        + ADD MOVIE
      </button>
      <Modal
        headerText="Add movie"
        type="add"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default AddMovie;
