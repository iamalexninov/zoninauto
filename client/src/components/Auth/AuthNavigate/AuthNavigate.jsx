import styles from "../../../pages/Auth/Auth.module.css";
import { Link } from "react-router-dom";

const AuthNavigate = ({ title, description, link, linkText }) => {
  return (
    <div className={styles.auth_link}>
      <h3 className={styles.auth_title}>{title}</h3>
      <p className={styles.auth_p}>{description}</p>
      <Link to={link} className={["btn", styles.auth_btn].join(" ")}>
        {linkText}
      </Link>
    </div>
  );
};

export default AuthNavigate;
