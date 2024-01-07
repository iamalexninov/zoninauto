import styles from "./HomeHeroButtons.module.css";
import { DealershipBtn, ShopBtn } from "../HomeHero.text";
import { GlobalLink } from "../../../../components/Global/Link/GlobalLink";
import { GlobalButton } from "../../../../components/Global/Button/GlobalButton";

export const HomeHeroButtons = () => {
  const baseStyles = {
    width: "250px",
    height: "70px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    color: "var(--white)",
    transition: "var(--tr-out)",
  };

  const hoverStyles = {
    backgroundColor: "rgba(255, 85, 0, 0.239)",
    transition: "var(--tr-in)",
  };

  return (
    <div className={styles.buttons}>
      <GlobalLink to="/catalogue">
        <GlobalButton
          type="submit"
          content={DealershipBtn}
          baseStyles={baseStyles}
          hoverStyles={hoverStyles}
        />
      </GlobalLink>
      <GlobalLink to="/shop">
      <GlobalButton
          type="submit"
          content={ShopBtn}
          baseStyles={baseStyles}
          hoverStyles={hoverStyles}
        />
      </GlobalLink>
    </div>
  );
};
