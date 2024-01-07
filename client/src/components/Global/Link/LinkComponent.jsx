import { NavLink } from "react-router-dom";

export const LinkComponent = ({ to, content, handler }) => {
  return (
    <NavLink className="href_link" to={to} onClick={handler || ""}>
      {content || ""}
    </NavLink>
  );
};
