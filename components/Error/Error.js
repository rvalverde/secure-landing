import Styles from "./Error.module.scss";

const Error = ({ children, customClass }) => {
  return (
    <span className={`${Styles.error} ${customClass ? customClass : ""}`}>
      {children}
    </span>
  );
};

export default Error;
