import { GlobalIcon } from "../../Global/Icon/GlobalIcon";
import styles from "./NavbarMobile.module.css";

export const NavbarMobile = ({ mobileMenu, setMobileMenu }) => {
  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div className={styles.buttons}>
        {mobileMenu ? (
          <div
            onClick={handleClick}
            className={["global_icon", styles.icon].join(" ")}
          >
            <GlobalIcon name="mobileCloseMenu" />
          </div>
        ) : (
          <div
            onClick={handleClick}
            className={["global_icon", styles.icon].join(" ")}
          >
            <GlobalIcon name="mobileOpenMenu" />
          </div>
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