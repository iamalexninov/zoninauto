import { createContext, useState } from "react";

export const MobileMenuContext = createContext();

export const MobileMenuProvider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  // TODO: Remove
  console.log("MobileContext mobileMenu:", mobileMenu);

  return (
    <MobileMenuContext.Provider
      value={{ mobileMenu, toggleMobileMenu, closeMobileMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
