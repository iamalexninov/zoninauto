import styles from "./FormTitle.module.css";

const FormTitle = ({ title }) => {
  return <h3 className={styles.title}>{title}</h3>;
};

export default FormTitle;
