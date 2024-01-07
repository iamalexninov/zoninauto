import { NavLink } from "react-router-dom";
import styles from "./Link.module.css";

export const LinkComponent = ({ to, content, value, handler }) => {
  const handleOnClick = () => {
    handler(value);
  };

  return (
    <NavLink className={styles.link} to={to} onClick={handleOnClick || ''}>
      {content || ""}
    </NavLink>
  );
};
