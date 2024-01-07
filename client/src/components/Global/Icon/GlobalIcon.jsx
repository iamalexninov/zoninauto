import { MdLogin, MdLogout } from "react-icons/md";
import { FaUser, FaBars, FaX } from "react-icons/fa6";

export const GlobalIcon = ({ name, size = 25, color = "black" }) => {
  const iconComponents = {
    login: MdLogin,
    logout: MdLogout,
    user: FaUser,
    mobileOpenMenu: FaBars,
    mobileCloseMenu: FaX,
  };

  const IconComponent = iconComponents[name] || null;

  if (!IconComponent) {
    // set default behaviour
    return "";
  }

  return <IconComponent size={size} color={color} />;
};
