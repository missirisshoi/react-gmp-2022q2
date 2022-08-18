import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ headerText, showModal, setShowModal, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div
      className={styles.modal_wrapper}
      onClick={(e) => {
        e.stopPropagation();
        setShowModal(false);
      }}
    >
      <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h2 className={styles.modal_header_h2}>{headerText}</h2>
          <span
            className={styles.modal_close}
            onClick={() => setShowModal(false)}
          >
            x
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  headerText: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
