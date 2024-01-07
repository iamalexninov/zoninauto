import styles from "./HomeHeroContent.module.css";
import { Subtitle, Title, Description } from "../HomeHero.text";

export const HomeHeroContent = () => {
  return (
    <div>
      <h4 className={styles.subtitle}>{Subtitle}</h4>
      <h1 className={styles.title}>{Title}</h1>
      <p className={styles.paragraph}>{Description}</p>
    </div>
  );
};
