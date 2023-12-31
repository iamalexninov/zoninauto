import styles from "./Register.module.css";

import Hero from "../../components/Hero/Hero";
import Companies from "../../components/Companies/Companies";

import { FaUser as UsernameIcon } from "react-icons/fa6";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { register } from "../../api/users";

const Register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await register(username, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Hero title="Join Now: Start Your Journey" subtitle="Sign Up" />
      <section className={["section", styles.register].join(" ")}>
        <div className={["wrapper", styles.content].join(" ")}>
          <div className={styles.login_link}>
            <h3 className={styles.login_title}>Welcome Back!</h3>
            <p className={styles.login_p}>
              To keep connected with us please login with your personal info.
            </p>
            <Link to="/signin" className={["btn", styles.login_btn].join(" ")}>
              sign in
            </Link>
          </div>
          <form className={styles.form} onSubmit={onSubmitHandler}>
            <h3 className={styles.form_title}>Create an Account</h3>
            <div className={styles.field}>
              <UsernameIcon size={20} className={styles.icon} />
              <input
                className="input_field"
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <UsernameIcon size={20} className={styles.icon} />
              <input
                className="input_field"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
              />
            </div>
            <button
              type="submit"
              className={["btn", styles.form_btn].join(" ")}
            >
              sign up
            </button>
          </form>
        </div>
      </section>
      <Companies />
    </>
  );
};

export default Register;
