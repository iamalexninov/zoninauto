import styles from "./AboutPreviewContent.module.css";
import { Title, Subtitle, Description } from "../AboutPreview.text";
import { GlobalLink } from "../../Global/Link/GlobalLink";
import { GlobalButton } from "../../Global/Button/GlobalButton";
import AboutPreviewList from "../AboutPreviewList/AboutPreviewList";

export const AboutPreviewContent = () => {
  const baseStyles = {
    width: "220px",
    height: "60px",
    color: "var(--white)",
    backgroundColor: "var(--primary)",
    transition: "var(--tr-out)",
  };

  const hoverStyles = {
    color: "var(--primary)",
    border: "1px solid var(--primary)",
    backgroundColor: "var(--white)",
    transition: "var(--tr-in)",
  };

  return (
    <div className={styles.text_about}>
      <span className={styles.subtitle}>{Subtitle}</span>
      <h3 className={styles.title}>{Title}</h3>
      <p className={styles.paragraph}>{Description}</p>
      <AboutPreviewList />
      <GlobalLink to="/about">
        <GlobalButton
          type="submit"
          content="more about us"
          baseStyles={baseStyles}
          hoverStyles={hoverStyles}
        />
      </GlobalLink>
    </div>
  );
};
