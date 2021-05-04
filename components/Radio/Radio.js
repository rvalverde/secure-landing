import Styles from "./Radio.module.scss";

const Radio = ({ label, name, id, onClick, checked, value, onChange }) => {
  return (
    <label htmlFor={id} className={Styles.radio}>
      <span className={Styles.radio__input} onClick={onClick}>
        <input
          type="radio"
          name={name}
          id={id}
          defaultValue={value}
          defaultChecked={checked}
          onChange={onChange}
        />
        <span
          className={`${Styles.radio__mark} ${
            checked ? Styles.radio__mark__checked : ""
          }`}
        ></span>
      </span>

      <span>{label}</span>
    </label>
  );
};

export default Radio;
