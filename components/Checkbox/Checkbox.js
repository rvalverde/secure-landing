import Styles from "./Checkbox.module.scss";

const Checkbox = ({ children, id, name, onChange, onClick, value }) => {
  return (
    <label className="flex" htmlFor={id}>
      <span className={Styles.checkbox}>
        <input
          id={id}
          name={name}
          onChange={onChange}
          onClick={onClick}
          type="checkbox"
          value={value}
        />
        <span className={Styles.checkbox__mark}></span>
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
