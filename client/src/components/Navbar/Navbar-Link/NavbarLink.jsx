import { LinkComponent } from "../../Global/Link/Link";

export const NavbarLink = ({ content, link, setMobileMenu }) => {
  return (
    <li>
      <LinkComponent
        to={link}
        content={content}
        handrel={setMobileMenu}
        value={false}
      />
    </li>
  );
};
