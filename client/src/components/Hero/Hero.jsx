import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = ({ title, subtitle }) => {
  return (
    <section className={styles.hero}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.list}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <span className={styles.line}>|</span>
        <h4 className={styles.subtitle}>{subtitle}</h4>
      </div>
    </section>
  );
};

export default Hero;
