import { GlobalLink } from "../../Global/Link/GlobalLink";

export const NavbarLink = ({ content, link, setMobileMenu }) => {
  return (
    <li>
      <GlobalLink
        to={link}
        content={content}
        handrel={() => setMobileMenu(false)}
      />
    </li>
  );
};
