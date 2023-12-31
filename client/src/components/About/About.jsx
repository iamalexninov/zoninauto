import styles from "./About.module.css";

import mechanic from "../../assets/images/mechanic.png";
import dealer from "../../assets/images/dealer.png";

import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

const About = () => {
  return (
    <section className={["section", styles.about].join(" ")}>
      <div className={["wrapper", styles.content].join(" ")}>
        <div className={styles.pictures_about}>
          <img
            className={[styles.img, styles.img1].join(" ")}
            src={dealer}
            alt="About Us Dealer."
          />
          <img
            className={[styles.img, styles.img2].join(" ")}
            src={mechanic}
            alt="About Us Mechanic."
          />
        </div>
        <div className={styles.text_about}>
          <span className={styles.subtitle}>about the company</span>
          <h3 className={styles.title}>
            Revolutionary Automotive Hub: Cars and Parts Unified
          </h3>
          <p className={styles.paragraph}>
            At the heart of our endeavor lies a transformative automotive hub
            where car sales and auto parts distribution converge seamlessly.
            Enabling a unified marketplace, our platform empowers enthusiasts
            and industry players by offering a cohesive space for purchasing
            vehicles and procuring a diverse range of auto parts.
          </p>
          <ul className={styles.about_list}>
            <li className={styles.about_item}>
              <div className={styles.about_icon}>
                <FaCheck size={25} />
              </div>
              <p>Quality Inventory</p>
            </li>
            <li className={styles.about_item}>
              <div className={styles.about_icon}>
                <FaCheck size={25} />
              </div>
              <p>Exceptional Customer Service</p>
            </li>
            <li className={styles.about_item}>
              <div className={styles.about_icon}>
                <FaCheck size={25} />
              </div>
              <p>Transparency and Trust</p>
            </li>
          </ul>
          <NavLink className={["btn", styles.about_btn].join(" ")}>
            more about us
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default About;
