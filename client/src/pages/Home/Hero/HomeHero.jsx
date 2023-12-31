import styles from "./HomeHero.module.css";
import { NavLink } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={["wrapper", styles.content].join(" ")}>
        <div className={styles.text_content}>
          <h4 className={styles.subtitle}>Zonin Auto</h4>
          <h1 className={styles.title}>Where Every Ride Counts</h1>
          <p className={styles.paragraph}>
            Welcome to our car world, where your dream ride becomes a reality.
            Explore our diverse selection of top-notch vehicles or find the
            perfect car part for your vehicle.
          </p>
          <div className={styles.buttons}>
            <NavLink to="/catalogue" className={["btn", styles.cta].join(" ")}>
              dealership
            </NavLink>
            <NavLink to="/shop" className={["btn", styles.cta].join(" ")}>
              shop
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
