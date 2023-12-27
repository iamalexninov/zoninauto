import styles from "./HomeHero.module.css";
import circle from "../../../assets/images/circle.png";
import mercedes from "../../../assets/images/mercedes.png";
import { NavLink } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={["wrapper", styles.content].join(" ")}>
        <div className={styles.text_content}>
          <h3 className={styles.subtitle}>Discover Excellence in Every Mile</h3>
          <h1 className={styles.title}>ZoninAuto: Where Every Ride Counts</h1>
          <p className={styles.paragraph}>
            Welcome to our dealership, where your dream ride becomes a reality.
            Explore our diverse selection of top-notch vehicles and find the
            perfect match for your lifestyle and preferences.
          </p>
          <NavLink to="/catalogue" className={["btn", styles.cta].join(" ")}>
            discover more
          </NavLink>
        </div>
        <div className={styles.picture_content}>
          <img
            src={circle}
            alt="Zonin Auto - Circle."
            className={styles.circle}
          />
          <img
            src={mercedes}
            alt="Zonin Auto - Mercedes Car."
            className={styles.mercedes}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;