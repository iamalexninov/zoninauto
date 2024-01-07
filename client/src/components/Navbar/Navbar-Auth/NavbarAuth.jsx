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

  return (
    <div className={styles.mobile}>
      {user ? (
        <div className={styles.logged}>
          <GlobalLink to="/profile" handler={setMobileMenu(false)}>
            <div className={["global_icon", styles.icon].join(" ")}>
              <GlobalIcon name="user" />
            </div>
          </GlobalLink>
          <GlobalLink to="/logout" onClick={handleLogout}>
            <div className={["global_icon", styles.icon].join(" ")}>
              <GlobalIcon name="logout" />
            </div>
          </GlobalLink>
        </div>
      ) : (
        <div className={styles.unlogged}>
          <GlobalLink to="/signin" onClick={() => setMobileMenu(false)}>
            <div className={["global_icon", styles.icon].join(" ")}>
              <GlobalIcon name="login" />
            </div>
          </GlobalLink>
        </div>
      )}
    </div>
  );
};
