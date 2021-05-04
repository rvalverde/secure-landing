import Styles from "./Button.module.scss";

const Button = ({ label, icon, onClick, href }) => {
  return (
    <button
      className={Styles.button}
      href={href}
      onClick={onClick}
      type="submit"
    >
      {label}

      {icon && <i className={`${Styles.button__icon} ${icon}`}></i>}
    </button>
  );
};

export default Button;
