import styles from "./AboutPreview.module.css";

import { AboutPreviewImages } from "./AboutPreviewImages/AboutPreviewImages";
import { AboutPreviewContent } from "./AboutPreviewContent/AboutPreviewContent";

const AboutPreview = () => {
  return (
    <>
    <section className={["section", styles.about].join(" ")}>
      <div className={["wrapper", styles.content].join(" ")}>
        <AboutPreviewImages />
        <AboutPreviewContent />
      </div>
    </section>
    </>
  );
};

export default AboutPreview;
