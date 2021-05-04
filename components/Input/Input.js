import { forwardRef } from "react";
import Styles from "./Input.module.scss";

const Input = (
  {
    customClass,
    icon,
    id,
    max,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    pattern,
    selected,
    textHolder,
    type,
    value,
  },
  ref
) => {
  return (
    <div className={`${Styles.input} ${customClass ? customClass : ""}`}>
      <input
        id={id}
        maxLength={max}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        pattern={pattern}
        required
        selected={selected}
        type={type ? type : "text"}
        value={value}
      />

      {textHolder && <label htmlFor={id}>{textHolder}</label>}

      {icon && (
        <span className={Styles.input__icon}>
          <i className={icon}></i>
        </span>
      )}
    </div>
  );
};

export default forwardRef(Input);
