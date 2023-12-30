import styles from "./Companies.module.css";

import power from "../../assets/images/power.png";
import autodealer from "../../assets/images/autodealer.png";
import bosch from "../../assets/images/bosch.png";
import race from "../../assets/images/race.png";

const Companies = () => {
  return (
    <section className={styles.companies}>
      <div className="wrapper">
        <div className={styles.companies_content}>
          <img className={styles.img} src={power} alt="Power Brand" />
          <img
            className={styles.img}
            src={autodealer}
            alt="Auto Dealer Brand"
          />
          <img className={styles.img} src={bosch} alt="Bosch Brand" />
          <img className={styles.img} src={race} alt="Race Brand" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
