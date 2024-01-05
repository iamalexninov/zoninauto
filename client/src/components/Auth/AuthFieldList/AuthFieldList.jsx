import styles from "../../../pages/Auth/Auth.module.css";
import { FaUser as UsernameIcon } from "react-icons/fa6";

const AuthFieldList = ({ value, setValue, type, name, placeholder }) => {
  return (
    <div className={styles.field}>
      <UsernameIcon size={20} className={styles.icon} />
      <input
        className="input_field"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default AuthFieldList;
