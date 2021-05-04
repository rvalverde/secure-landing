import Styles from "./Select.module.scss";

const Select = ({ name, id, customClass, options, value, onChange }) => {
  return (
    <div className={`${Styles.select} ${customClass}`}>
      <select name={name} id={id} defaultValue={value} onChange={onChange}>
        {options.map((value, i) => (
          <option key={i} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
