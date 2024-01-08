import { GlobalIcon } from "../../Global/Icon/GlobalIcon";

export const AboutPreviewListItem = ({ text }) => {
  const baseStyles = {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "50px",
    backgroundColor: "var(--primary)",
    color: "var(--white)",
    transition: "var(--tr-out)",
  };

  return (
    <li>
      <GlobalIcon name="check" baseStyles={baseStyles} hoverStyles={null} />
      <p>{text}</p>
    </li>
  );
};
