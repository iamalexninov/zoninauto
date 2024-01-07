import styles from "./Navbar.module.css";

import { NavbarLogo } from "./Navbar-Logo/NavbarLogo";
import { NavbarList } from "./Navbar-List/NavbarList";
import { NavbarAuth } from "./Navbar-Auth/NavbarAuth";
import { NavbarMobile } from "./Navbar-Mobile/NavbarMobile";
import { useMobileMenuContext } from "../../hooks/useMobileMenuContext";

const Navbar = () => {
  const mobile = useMobileMenuContext()

  console.log(mobile)

  return (
    <header className={styles.header}>
      <nav
        className={
          mobile.mobileMenu ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
        }
      >
        <NavbarLogo />
        <NavbarList />
        <NavbarAuth />
      </nav>
      <NavbarMobile />
    </header>
  );
};

export default Navbar;
