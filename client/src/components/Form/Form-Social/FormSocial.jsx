// facebook,google,linkedin icons
import styles from "./FormSocial.module.css";
import {
  FaFacebookF as Facebook,
  FaLinkedin as Linkedin,
  FaGoogle as Google,
} from "react-icons/fa6";

const FormSocial = ({ content }) => {
  return (
    <div className={styles.items}>
      <div className={styles.icons}>
        <div className={styles.icon_box}>
          <Facebook className={styles.icon} size={20} />
        </div>
        <div className={styles.icon_box}>
          <Google className={styles.icon} size={20} />
        </div>
        <div className={styles.icon_box}>
          <Linkedin className={styles.icon} size={20} />
        </div>
      </div>
      <div>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default FormSocial;
