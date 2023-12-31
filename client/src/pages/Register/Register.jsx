import styles from "./Register.module.css";

import Hero from "../../components/Hero/Hero";
import Companies from "../../components/Companies/Companies";

import { FaUser as UsernameIcon } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
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
          <form className={styles.form}>
            <h3 className={styles.form_title}>Create an Account</h3>
            <div className={styles.field}>
              <UsernameIcon size={20} className={styles.icon} />
              <input
                className="input_field"
                type="text"
                name="username"
                placeholder="Username"
              />
            </div>
            <div className={styles.field}>
              <UsernameIcon size={20} className={styles.icon} />
              <input
                className="input_field"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className={styles.field}>
              <UsernameIcon size={20} className={styles.icon} />
              <input
                className="input_field"
                type="password"
                name="username"
                placeholder="Password"
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
