import styles from "./NavbarLogo.module.css";
// TODO: Change it later
import logo from "../../../assets/images/hero-logo.png";
import { Alt } from "./NavbarLogo.text";

export const NavbarLogo = () => {
  return <img className={styles.logo} src={logo} alt={Alt} />;
};
