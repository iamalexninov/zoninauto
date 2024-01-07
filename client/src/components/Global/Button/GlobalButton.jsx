import { useHover } from "../../../hooks/useHover";
import { useDynamicStyles } from "../../../hooks/useDynamicStyles";

export const GlobalButton = ({ type, content, baseStyles, hoverStyles }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const { dynamicStyles } = useDynamicStyles(
    baseStyles,
    hoverStyles,
    isHovered
  );

  return (
    <button
      type={type}
      className="btn"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={dynamicStyles}
    >
      {content}
    </button>
  );
};
