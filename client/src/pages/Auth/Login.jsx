import styles from "./Auth.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaUser as UsernameIcon } from "react-icons/fa6";

import useSignin from "../../hooks/useSignin";

import Companies from "../../components/Companies/Companies";
import Hero from "../../components/Hero/Hero";

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
          <div className={styles.auth_link}>
            <h3 className={styles.auth_title}>Welcome Back!</h3>
            <p className={styles.auth_p}>
              Enter your personal details and start journey with us.
            </p>
            <Link to="/signup" className={["btn", styles.auth_btn].join(" ")}>
              sign up
            </Link>
          </div>
          <form className={styles.form} onSubmit={handleOnSubmit}>
            <h3 className={styles.form_title}>Sign In to Zonin Auto</h3>
            <div className={styles.field}>
              <UsernameIcon size={20} className={styles.icon} />
              <input
                className="input_field"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={styles.field}>
              <UsernameIcon size={20} className={styles.icon} />
              <input
                className="input_field"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className={["btn", styles.form_btn].join(" ")}
              disabled={isLoading}
            >
              sign in
            </button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </section>
      <Companies />
    </>
  );
};

export default Login;
