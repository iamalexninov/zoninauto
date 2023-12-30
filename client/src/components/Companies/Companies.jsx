import styles from "./Companies.module.css";

import japanparts from "../../assets/images/japanparts.png";
import swag from "../../assets/images/swag.png";
import bosch from "../../assets/images/bosch.png";
import mahle from "../../assets/images/mahle.png";
import trw from "../../assets/images/trw.png";
import fram from "../../assets/images/fram.png";

const Companies = () => {
  return (
    <section className={styles.companies}>
      <div className="wrapper">
        <div className={styles.companies_content}>
          <img className={styles.img} src={japanparts} alt="Japanparts Brand" />
          <img className={styles.img} src={swag} alt="Swag Brand" />
          <img className={styles.img} src={bosch} alt="Bosch Brand" />
          <img className={styles.img} src={mahle} alt="Mahle Brand" />
          <img className={styles.img} src={trw} alt="TRW Automotive Brand" />
          <img className={styles.img} src={fram} alt="Fram Brand" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
