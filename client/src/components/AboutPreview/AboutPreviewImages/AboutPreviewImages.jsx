import styles from "./AboutPreviewImages.module.css";
import mechanic from "../../../assets/images/mechanic.png";
import dealer from "../../../assets/images/dealer.png";

import { AltDealer, AltMechanic } from "../AboutPreview.text";

export const AboutPreviewImages = () => {
  return (
    <div className={styles.pictures_about}>
      <img
        className={[styles.img, styles.img1].join(" ")}
        src={dealer}
        alt={AltDealer}
      />
      <img
        className={[styles.img, styles.img2].join(" ")}
        src={mechanic}
        alt={AltMechanic}
      />
    </div>
  );
};
