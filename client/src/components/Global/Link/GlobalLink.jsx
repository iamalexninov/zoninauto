import styles from "./GlobalLink.module.css";
import { Link } from "react-router-dom";

export const GlobalLink = ({ to, content, children, handler }) => {
  const handleClick = (e) => {
    handler(e);
  };

  return (
    <Link className={styles.link} to={to} onClick={handleClick}>
      {content || children}
    </Link>
  );
};
