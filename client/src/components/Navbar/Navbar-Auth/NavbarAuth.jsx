import styles from "./NavbarAuth.module.css";

import { useNavigate } from "react-router-dom";

import useLogout from "../../../hooks/useLogout";

import { useAuthContext } from "../../../hooks/useAuthContext";
import { GlobalLink } from "../../Global/Link/GlobalLink";
import { GlobalIcon } from "../../Global/Icon/GlobalIcon";

export const NavbarAuth = ({ setMobileMenu }) => {
  const { user } = useAuthContext();

  const { signout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    await signout();
    setMobileMenu(false);
    navigate("/");
  };

  const baseStyles = {
    color: "var(--white)",
    backgroundColor: "var(--primary)",
  };

  const hoverStyles = {
    color: "var(--primary)",
    border: "1px solid var(--primary)",
    backgroundColor: "var(--white)",
  };

  return (
    <div className={styles.mobile}>
      {user ? (
        <div className={styles.logged}>
          <GlobalLink to="/profile" handler={() => setMobileMenu(false)}>
            <GlobalIcon
              name="user"
              baseStyles={baseStyles}
              hoverStyles={hoverStyles}
            />
          </GlobalLink>
          <GlobalLink to="/logout" handler={(e) => handleLogout(e)}>
            <GlobalIcon
              name="logout"
              baseStyles={baseStyles}
              hoverStyles={hoverStyles}
            />
          </GlobalLink>
        </div>
      ) : (
        <div className={styles.unlogged}>
          <GlobalLink to="/signin" handler={() => setMobileMenu(false)}>
            <GlobalIcon
              name="login"
              baseStyles={baseStyles}
              hoverStyles={hoverStyles}
            />
          </GlobalLink>
        </div>
      )}
    </div>
  );
};
