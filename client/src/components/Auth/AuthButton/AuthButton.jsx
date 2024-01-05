import styles from "./AuthButton.module.css";

const AuthButton = ({title, isLoading}) => {
  return (
    <button
      type="submit"
      className={["btn", styles.button].join(" ")}
      disabled={isLoading}
    >
      {title}
    </button>
  );
};

export default AuthButton;
