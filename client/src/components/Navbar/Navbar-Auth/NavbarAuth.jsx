import styles from "./NavbarAuth.module.css";

import { MdLogout as LogoutIcon } from "react-icons/md";
import { MdLogin as LoginIcon } from "react-icons/md";
import { FaUser as UserIcon } from "react-icons/fa6";

import { Link, useNavigate } from "react-router-dom";

import useLogout from "../../../hooks/useLogout";

import { useAuthContext } from "../../../hooks/useAuthContext";

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
          <Link to="/profile" onClick={() => setMobileMenu(false)}>
            <UserIcon size={25} className={styles.icon} />
          </Link>
          <Link to="/logout" onClick={handleLogout}>
            <LogoutIcon size={25} className={styles.icon} />
          </Link>
        </div>
      ) : (
        <div className={styles.unlogged}>
          <Link to="/signin" onClick={() => setMobileMenu(false)}>
            <LoginIcon size={25} className={styles.icon} />
          </Link>
        </div>
      )}
    </div>
  );
};
