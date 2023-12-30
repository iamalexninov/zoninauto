import styles from "./Footer/Footer.module.css";

const ContactList = ({ icon, title, description }) => {
  return (
    <div className={styles.icon_entry}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.icon_text}>
        <p className={styles.icon_title}>{title}</p>
        <p className={styles.icon_description}>{description}</p>
      </div>
    </div>
  );
};

export default ContactList;
