export const useDynamicStyles = (baseStyles, hoverStyles, isHovered) => {
  const dynamicStyles = {
    ...baseStyles,
    ...(isHovered && hoverStyles),
  };

  return { dynamicStyles };
};
