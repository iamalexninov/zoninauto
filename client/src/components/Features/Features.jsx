import styles from "./Features.module.css";
import cars from "../../assets/images/cars.jpg";
import shop from "../../assets/images/parts.jpg";
import { NavLink } from "react-router-dom";

const Features = () => {
  return (
    // Fix: Make a section for store. - remove features or rewrite it. - service
    <section className={styles.features}>
      <div className={styles.cars}>
        <div className={styles.text_cars}>
          <span className={styles.subtitle}>zonin auto / car dealership</span>
          <h4 className={styles.title}>
            Explore Our Diverse Collection of Pre-Owned Vehicles
          </h4>
          <NavLink
            to="/catalogue"
            className={["btn", styles.cars_btn].join(" ")}
          >
            cars
          </NavLink>
        </div>
        <img className={styles.img} src={cars} alt="Explore Our Cars" />
      </div>
      <div className={styles.store}>
        <div className={styles.text_store}>
          <span className={styles.subtitle}>zonin auto / store</span>
          <h4 className={styles.title}>
            Gear Up Garage: Your One-Stop Store for Quality Vehicle Parts
          </h4>
          <NavLink to="/store" className={["btn", styles.store_btn].join(" ")}>
            store
          </NavLink>
        </div>
        <img className={styles.img} src={shop} alt="Explore Our Store" />
      </div>
    </section>
  );
};

export default Features;
