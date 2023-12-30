import youtubeBtn from "../../assets/images/youtube-btn.png";
import styles from "./YoutubeReviews.module.css";

const YoutubeReviews = () => {
  return (
    <section className={styles.youtube}>
      <div className={styles.content}>
        <div className={styles.text_youtube}>
          <span className={styles.subtitle}>youtube reviews</span>
          <h3 className={styles.title}>
            Discover detailed, expert car reviews on our YouTube channel.
            Explore each vehicle.
          </h3>
        </div>
        <div className={styles.picture_youtube}>
          <img src={youtubeBtn} alt="Zonin Auto Youtube Channel Play Button" />
        </div>
      </div>
    </section>
  );
};

export default YoutubeReviews;
