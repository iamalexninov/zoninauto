import styles from "./Auth.module.css";

import { useState } from "react";

import useSignup from "../../hooks/useSignup";

import Hero from "../../components/Hero/Hero";
import FormRedirect from "../../components/Form/Form-Redirect/FormRedirect";
import FormTitle from "../../components/Form/Form-Title/FormTitle";
import FormSocial from "../../components/Form/Form-Social/FormSocial";
import FormGroup from "../../components/Form/Form-Group/FormGroup";
import FormButton from "../../components/Form/Form-Button/FormButton";
import FormError from "../../components/Form/Form-Error/FormError";
import Companies from "../../components/Companies/Companies";

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { signup, error, isLoading } = useSignup();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await signup(userData.username, userData.email, userData.password);
    setUserData({ username: "", email: "", password: "" });
  };

  return (
    <>
      <Hero title="Join Now: Start Your Journey" subtitle="Sign Up" />
      <section className={["section", styles.auth].join(" ")}>
        <div className={["wrapper", styles.content].join(" ")}>
          <FormRedirect
            title="Welcome Back!"
            description="To keep connected with us please login with your personal info."
            link="/signin"
            content="sign in"
          />
          <form className={styles.form} onSubmit={handleOnSubmit}>
            <FormTitle title="Create an Account" />
            <FormSocial content="or use your email for registration:" />
            <div className={styles.fields}>
              <FormGroup
                type="username"
                name="username"
                placeholder="Username"
                inputValue={userData}
                setInputValue={setUserData}
              />
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

export default Register;
