import { MdLogin, MdLogout } from "react-icons/md";
import { FaUser, FaBars, FaX } from "react-icons/fa6";

import { useHover } from "../../../hooks/useHover";
import { useDynamicStyles } from "../../../hooks/useDynamicStyles";

export const GlobalIcon = ({ name, size = 25, baseStyles, hoverStyles }) => {
  
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const { dynamicStyles } = useDynamicStyles(
    baseStyles,
    hoverStyles,
    isHovered
  );

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

  return (
    <div
      className="global_icon"
      style={dynamicStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconComponent size={size} />
    </div>
  );
};
