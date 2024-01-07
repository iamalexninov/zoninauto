import { GlobalLink } from "../../Global/Link/GlobalLink";

export const NavbarLink = ({ content, link }) => {
  return (
    <li>
      <GlobalLink to={link} content={content} />
    </li>
  );
};
