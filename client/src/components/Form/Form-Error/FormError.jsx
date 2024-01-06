import styles from "./FormError.module.css";

const FormError = ({ error }) => {
  return (
    <div className={styles.error}>
      <p className={styles.message}>{error ? error : null}</p>
    </div>
  );
};

export default FormError;
