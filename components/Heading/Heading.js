import Step from "@components/Step/Step";
import Styles from "./Heading.module.scss";

const Heading = ({ title, bold, description, number, total, small }) => {
  return (
    <div className={Styles.heading}>
      {number && total && <Step Number={number} Total={total} />}

      <h1
        className={`${Styles.heading__title} ${
          small && Styles["heading__title--small"]
        }`}
      >
        {title}{" "}
        {bold && <span className={Styles["heading__title--bold"]}>{bold}</span>}
      </h1>

      <p>{description}</p>
    </div>
  );
};

export default Heading;
