import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  FaBars as MobileOpenBtn,
  FaX as MobileCloseBtn,
} from "react-icons/fa6";

import styles from "./Navbar.module.css";

import logo from "../../assets/images/logo.png";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const { signout } = useLogout();

  const hideMobileMenu = () => [setMobileMenu(false)];

  const handleOnLogoutClick = async (e) => {
    e.preventDefault();

    await signout();
    navigate("/");
  };

  useEffect(() => {
    window.onscroll = () => {
      let currentScroolValue = window.scrollY;

      if (currentScroolValue > 700) {
        hideMobileMenu();
      }
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <img className={styles.logo} src={logo} alt="Zonin Auto Logo" />
        <ul
          className={
            mobileMenu
              ? `${styles.navbar_list} ${styles.active}`
              : styles.navbar_list
          }
        >
          <li>
            <NavLink
              onClick={hideMobileMenu}
              className={styles.navbar_link}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={hideMobileMenu}
              className={styles.navbar_link}
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={hideMobileMenu}
              className={styles.navbar_link}
              to="/catalogue"
            >
              Catalogue
            </NavLink>
          </li>
          {/* TODO: add e-shop later */}

          {/* <li>
            <NavLink
              onClick={hideMobileMenu}
              className={styles.navbar_link}
              to="/catalogue"
            >
              E-Shop
            </NavLink>
          </li> */}
          <li>
            <NavLink
              onClick={hideMobileMenu}
              className={styles.navbar_link}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={hideMobileMenu}
              to="/signin"
              className={["btn", styles.navbar_btn].join(" ")}
            >
              sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={(hideMobileMenu, handleOnLogoutClick)}
              to="/logout"
              className={["btn", styles.navbar_btn].join(" ")}
            >
              Logout
            </NavLink>
          </li>
        </ul>
        <div className={styles.mobile_btns}>
          {mobileMenu ? (
            <MobileCloseBtn
              className={styles.mobile_btn}
              size={30}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          ) : (
            <MobileOpenBtn
              className={styles.mobile_btn}
              size={30}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          )}
        </div>
        {mobileMenu && (
          <div className={styles.navbar_overlay} onClick={hideMobileMenu}></div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
