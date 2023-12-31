import styles from "./Service.module.css";

import { FaCartShopping as Shop } from "react-icons/fa6";
import { IoCarSport as Dealership } from "react-icons/io5";

import mercedes from "../../assets/images/mercedes.png";

const Service = () => {
  return (
    <section className={['section',styles.service].join(' ')}>
      <div className="wrapper">
        <h4 className={styles.subtitle}>Our Services</h4>
        <h3 className={styles.title}>Streamlined Automation Services</h3>
        <div className={styles.items}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.icon}>
                <Shop size={60} />
              </div>
              <h4 className={styles.item_title}>Car parts</h4>
              <p className={styles.item_p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur vitae tenetur laudantium totam ullam, accusantium deserunt possimus. Quis totam, veritatis dolorem, magnam repellendus debitis repudiandae impedit at, officiis vitae ut.</p>
            </li>
          </ul>
          <div className={styles.img}>
            <img src={mercedes} alt="Mercedes Benz C63 AMG" />
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.icon}>
                <Dealership size={60} />
              </div>
              <h4 className={styles.item_title}>Cars Dealership</h4>
              <p className={styles.item_p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur vitae tenetur laudantium totam ullam, accusantium deserunt possimus. Quis totam, veritatis dolorem, magnam repellendus debitis repudiandae impedit at, officiis vitae ut.</p>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
