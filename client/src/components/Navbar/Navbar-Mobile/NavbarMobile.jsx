import styles from "./NavbarMobile.module.css";

import {
  FaBars as MobileOpenBtn,
  FaX as MobileCloseBtn,
} from "react-icons/fa6";

export const NavbarMobile = ({ mobileMenu, setMobileMenu }) => {
  return (
    <>
      <div className={styles.buttons}>
        {mobileMenu ? (
          <MobileCloseBtn
            className={styles.icon}
            size={25}
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        ) : (
          <MobileOpenBtn
            className={styles.icon}
            size={25}
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        )}
      </div>
      {mobileMenu && (
        <div
          className={styles.overlay}
          onClick={() => setMobileMenu(false)}
        ></div>
      )}
    </>
  );
};
