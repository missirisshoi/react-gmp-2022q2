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
      >
        <div className={styles.modal_content}>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="m_title" className={styles.modal_label}>
              Title
            </label>
            <input
              type="text"
              id="m_title"
              name="m_title"
              className={styles.modal_input}
            />
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="m_year" className={styles.modal_label}>
              Release date
            </label>
            <input
              type="text"
              id="m_year"
              name="m_year"
              className={styles.modal_input}
            />
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="m_url" className={styles.modal_label}>
              Url
            </label>
            <input
              type="text"
              id="m_url"
              name="m_url"
              className={styles.modal_input}
            />
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="m_rating" className={styles.modal_label}>
              Rating
            </label>
            <input
              type="text"
              id="m_rating"
              name="m_rating"
              className={styles.modal_input}
            />
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="m_genre" className={styles.modal_label}>
              Genre
            </label>
            <input
              type="text"
              id="m_genre"
              name="m_genre"
              className={styles.modal_input}
            />
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="m_runtime" className={styles.modal_label}>
              Runtime
            </label>
            <input
              type="text"
              id="m_runtime"
              name="m_runtime"
              className={styles.modal_input}
            />
          </div>
          <div className={styles.form_field_wrapper}>
            <label htmlFor="m_overview" className={styles.modal_label}>
              Overview
            </label>
            <textarea
              name="m_overview"
              id="m_overview"
              cols="80"
              rows="4"
              className={styles.modal_textarea}
            />
          </div>
        </div>
        <div className={styles.modal_btns}>
          <button className={styles.modal_btn_secondary} type="button">
            Reset
          </button>
          <button className={styles.modal_btn} type="button">
            Submit
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AddMovie;
