import styles from "./FormButton.module.css";

const FormButton = ({ content, isLoading }) => {
  return (
    <button
      type="submit"
      className={["btn", styles.button].join(" ")}
      disabled={isLoading}
    >
      {content}
    </button>
  );
};

export default FormButton;
