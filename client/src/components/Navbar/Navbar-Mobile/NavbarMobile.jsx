import styles from "./NavbarMobile.module.css";
import { GlobalIcon } from "../../Global/Icon/GlobalIcon";
import { useMobileMenuContext } from "../../../hooks/useMobileMenuContext";

export const NavbarMobile = () => {
  const { mobileMenu } = useMobileMenuContext();

  return (
    <>
      <div className={styles.buttons}>
        {mobileMenu ? (
          <GlobalIcon name="mobileCloseMenu" baseStyles="" hoverStyles="" />
        ) : (
          <GlobalIcon name="mobileOpenMenu" baseStyles="" hoverStyles="" />
        )}
      </div>
      {mobileMenu && <div className={styles.overlay}></div>}
    </>
  );
};
