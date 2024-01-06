import { Link } from "react-router-dom";
import styles from "./FormRedirect.module.css";

const FormRedirect = ({ title, description, link, content }) => {
  return (
    <div className={styles.link}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{description}</p>
      <Link to={link} className={["btn", styles.btn].join(" ")}>
        {content}
      </Link>
    </div>
  );
};

export default FormRedirect;
