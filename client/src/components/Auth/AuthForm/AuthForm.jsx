import styles from "../../../pages/Auth/Auth.module.css";
import AuthButton from "../AuthButton/AuthButton";
import AuthFieldList from "../AuthFieldList/AuthFieldList";

const AuthForm = ({
  title,
  handleOnSubmit,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  error,
  isLoading,
}) => {
  const fields = [
    {
      key: 1,
      value: email,
      setValue: setEmail,
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      key: 2,
      value: password,
      setValue: setPassword,
      type: "password",
      name: "password",
      placeholder: "Password",
    },
  ];

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <h3 className={styles.form_title}>{title}</h3>
      {fields.map((f) => (
        <AuthFieldList
          key={f.key}
          value={f.value}
          setValue={f.setValue}
          type={f.type}
          name={f.name}
          placeholder={f.placeholder}
        />
      ))}
      <AuthButton title="sign in" isLoading={isLoading} />
      {error && <p>{error}</p>}
    </form>
  );
};

export default AuthForm;
