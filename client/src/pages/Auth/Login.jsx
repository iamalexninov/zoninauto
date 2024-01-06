import styles from "./Auth.module.css";

import { useState } from "react";

import useSignin from "../../hooks/useSignin";

import Hero from "../../components/Hero/Hero";
import Companies from "../../components/Companies/Companies";
import FormRedirect from "../../components/Form/Form-Redirect/FormRedirect";
import FormTitle from "../../components/Form/Form-Title/FormTitle";
import FormSocial from "../../components/Form/Form-Social/FormSocial";
import FormGroup from "../../components/Form/Form-Group/FormGroup";
import FormButton from "../../components/Form/Form-Button/FormButton";
import FormError from "../../components/Form/Form-Error/FormError";

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const { signin, error, isLoading } = useSignin();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await signin(userData.email, userData.password);
    setUserData({ email: '', password: '' });
  };

  return (
    <>
      <Hero
        title="Welcome Back, Explorer: Access Your Account"
        subtitle="Sign In"
      />
      <section className={["section", styles.auth].join(" ")}>
        <div className={["wrapper", styles.content].join(" ")}>
          <FormRedirect
            title="Hello, Friend!"
            description="Enter your personal details and start journey with us."
            link="/signup"
            content="sign up"
          />
          <form className={styles.form} onSubmit={handleOnSubmit}>
            <FormTitle title="Sign In to Zonin Auto" />
            <FormSocial content="or use your email account:" />
            <div className={styles.fields}>
              <FormGroup
                type="email"
                name="email"
                placeholder="Email"
                inputValue={userData}
                setInputValue={setUserData}
              />
              <FormGroup
                type="password"
                name="password"
                placeholder="Password"
                inputValue={userData}
                setInputValue={setUserData}
              />
            </div>
            <FormButton content="sign in" isLoading={isLoading} />
            {error ? <FormError error={error} /> : ""}
          </form>
        </div>
      </section>
      <Companies />
    </>
  );
};

export default Login;
