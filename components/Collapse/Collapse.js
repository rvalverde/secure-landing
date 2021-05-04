import { useState } from "react";
import Styles from "./Collapse.module.scss";

const Collapse = ({ title, subtitle, children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div
      className={`${Styles.collapse} ${open ? Styles["collapse--active"] : ""}`}
      onClick={handleClick}
    >
      <div className={Styles.collapse__title}>
        <div>{title}</div>
        <div
          className={`${Styles.collapse__options} ${
            subtitle ? Styles["collapse__options--subtitle"] : ""
          }`}
        >
          {subtitle && (
            <div className={Styles.collapse__subtitle}>{subtitle}</div>
          )}

          <div className={Styles.collapse__icon}>
            <i className="icon-down"></i>
          </div>
        </div>
      </div>
      <div className={Styles.collapse__content}>
        <div className={Styles.collapse__wrap}>{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
