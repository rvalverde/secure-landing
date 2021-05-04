import { useEffect } from "react";
import Styles from "./Loading.module.scss";

const Loading = ({ loading }) => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return (
    <div className={Styles.loading}>
      <div className={Styles.loading__wrap}>
        <div
          className={`${Styles.loading__item} ${Styles["loading__item--1"]}`}
        ></div>
        <div
          className={`${Styles.loading__item} ${Styles["loading__item--2"]}`}
        ></div>
        <div
          className={`${Styles.loading__item} ${Styles["loading__item--3"]}`}
        ></div>
        <div
          className={`${Styles.loading__item} ${Styles["loading__item--4"]}`}
        ></div>
        <div
          className={`${Styles.loading__item} ${Styles["loading__item--5"]}`}
        ></div>
        <div
          className={`${Styles.loading__item} ${Styles["loading__item--6"]}`}
        ></div>
        <div
          className={`${Styles.loading__item} ${Styles["loading__item--7"]}`}
        ></div>
        <div
          className={`${Styles.loading__item} ${Styles["loading__item--8"]}`}
        ></div>
        <div
          className={`${Styles.loading__item} ${Styles["loading__item--9"]}`}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
