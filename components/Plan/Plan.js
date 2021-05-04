import Styles from "./Plan.module.scss";

const Plan = ({
  checked,
  customClass,
  name,
  onChange,
  period,
  price,
  title,
  value,
}) => {
  return (
    <label
      className={`${Styles.plan} ${customClass} ${
        checked ? Styles["plan--checked"] : ""
      }`}
      htmlFor={value}
    >
      <input
        type="radio"
        name={name}
        id={value}
        defaultValue={value}
        defaultChecked={checked}
        onChange={onChange}
      />
      <span className={Styles.plan__border}></span>
      <span className={Styles.plan__radio}></span>
      <span className={Styles.plan__name}>{title}</span>
      <span className={Styles.plan__amount}>
        <span className={Styles.plan__price}>{price}</span>
        <span className={Styles.plan__period}>{period}</span>
      </span>
    </label>
  );
};

export default Plan;
