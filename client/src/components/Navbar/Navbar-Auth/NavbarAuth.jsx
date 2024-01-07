import styles from "./NavbarAuth.module.css";

import { Link, useNavigate } from "react-router-dom";

import useLogout from "../../../hooks/useLogout";

import { useAuthContext } from "../../../hooks/useAuthContext";
import { LinkComponent } from "../../Global/Link/Link";
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
          <LinkComponent to="/profile" handler={setMobileMenu(false)}>
            <div>
              <GlobalIcon name="user" />
            </div>
          </LinkComponent>
          <Link to="/logout" onClick={handleLogout}>
            <div>
              <GlobalIcon name="logout" />
            </div>
          </Link>
        </div>
      ) : (
        <div className={styles.unlogged}>
          <Link to="/signin" onClick={() => setMobileMenu(false)}>
            <div>
              <GlobalIcon name="login" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
