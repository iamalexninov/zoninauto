export const ButtonComponent = ({ type, content, handler }) => {
  return (
    <button type={type} onClick={handler}>
      {content}
    </button>
  );
};
