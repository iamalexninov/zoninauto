import styles from "./NavbarLink.module.css";

import { NavLink } from "react-router-dom";

export const NavbarLink = ({ content, link, setMobileMenu }) => {
  return (
    <li>
      <NavLink
        className={styles.link}
        to={link}
        onClick={() => setMobileMenu(false)}
      >
        {content}
      </NavLink>
    </li>
  );
};
