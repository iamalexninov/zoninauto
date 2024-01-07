import styles from "./HomeHero.module.css";

import { HomeHeroContent } from "./Home-Hero-Content/HomeheroContent";
import { HomeHeroButtons } from "./Home-Hero-Buttons/HomeHeroButtons";

const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={["wrapper", styles.content].join(" ")}>
        <div className={styles.text_content}>
          <HomeHeroContent />
          <HomeHeroButtons />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
