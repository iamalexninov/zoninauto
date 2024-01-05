import styles from "./Auth.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useSignin from "../../hooks/useSignin";

import Hero from "../../components/Hero/Hero";
import AuthNavigate from "../../components/Auth/AuthNavigate/AuthNavigate";
import Companies from "../../components/Companies/Companies";
import AuthForm from "../../components/Auth/AuthForm/AuthForm";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();
  const { signin, error, isLoading } = useSignin();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
      navigate("/signin");
    }
  };

  return (
    <>
      <Hero
        title="Welcome Back, Explorer: Access Your Account"
        subtitle="Sign In"
      />
      <section className={["section", styles.auth].join(" ")}>
        <div className={["wrapper", styles.content].join(" ")}>
          <AuthNavigate
            title="Welcome Back!"
            description="Enter your personal details and start journey with us."
            link="signup"
            linkText="sign up"
          />
          <AuthForm
            title="Sign In to Zonin Auto"
            handleOnSubmit={handleOnSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            isLoading={isLoading}
          />
        </div>
      </section>
      <Companies />
    </>
  );
};

export default Login;
