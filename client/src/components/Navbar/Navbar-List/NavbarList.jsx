import styles from "./NavbarList.module.css";
import { NavbarLink } from "../Navbar-Link/NavbarLink";
import { Links } from "./NavbarList.text";

export const NavbarList = ({ setMobileMenu }) => {
  return (
    <ul className={styles.list}>
      {Links.map((l) => (
        <NavbarLink
          key={Math.random()}
          content={l.content}
          link={l.link}
          setMobileMenu={setMobileMenu}
        />
      ))}
    </ul>
  );
};
