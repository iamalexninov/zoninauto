import styles from "./FormGroup.module.css";

import { FaUserAlt as Username } from "react-icons/fa";
import { MdEmail as Email } from "react-icons/md";
import { RiLockPasswordFill as Password } from "react-icons/ri";

const FormGroup = ({ type, name, placeholder, inputValue, setInputValue }) => {
  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className={styles.field}>
      {(name === "username" && (
        <Username size={20} className={styles.icon} />
      )) ||
        (name === "email" && <Email size={20} className={styles.icon} />) ||
        (name === "password" && <Password size={20} className={styles.icon} />)}
      <input
        className="input_field"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChangeInput}
        value={inputValue[name]}
      />
    </div>
  );
};

export default FormGroup;
