import { LinkComponent } from "../../Global/Link/LinkComponent";

export const NavbarLink = ({ content, link, setMobileMenu }) => {
  return (
    <li>
      <LinkComponent to={link} content={content} handrel={setMobileMenu} />
    </li>
  );
};
