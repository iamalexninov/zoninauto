import styles from "./Navbar.module.css";

import { useEffect, useState } from "react";

import { NavbarLogo } from "./Navbar-Logo/NavbarLogo";
import { NavbarList } from "./Navbar-List/NavbarList";
import { NavbarAuth } from "./Navbar-Auth/NavbarAuth";
import { NavbarMobile } from "./Navbar-Mobile/NavbarMobile";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      let currentScroolValue = window.scrollY;

      if (currentScroolValue > 700) {
        setMobileMenu(false);
      }
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav
        className={
          mobileMenu ? `${styles.navbar} ${styles.active}` : styles.navbar
        }
      >
        <NavbarLogo />
        <NavbarList setMobileMenu={setMobileMenu}/>
        <NavbarAuth setMobileMenu={setMobileMenu}/>
      </nav>
      <NavbarMobile mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </header>
  );
};

export default Navbar;
