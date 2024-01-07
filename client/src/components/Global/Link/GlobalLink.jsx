import styles from "./GlobalLink.module.css";
import { Link } from "react-router-dom";

export const GlobalLink = ({ to, content, children }) => {
  return (
    <Link className={styles.link} to={to} >
      {content || children}
    </Link>
  );
};
