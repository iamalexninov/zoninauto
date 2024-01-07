import { useState } from "react";

export const GlobalButton = ({ type, content, baseStyles, hoverStyles }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = {
    ...baseStyles,
    ...(isHovered && hoverStyles)
  }

  return (
    <button
      type={type}
      className="btn"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={buttonStyles}
    >
      {content}
    </button>
  );
};
