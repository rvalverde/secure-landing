import Styles from "./Faqs.module.scss";
import Collapse from "@components/Collapse/Collapse";

const Faqs = ({ title, bold, items }) => {
  return (
    <div className={Styles.faqs}>
      <div className={Styles.faqs__heading}>
        <h3 className={Styles.faqs__title}>
          {title} <span className={Styles["faqs__title--bold"]}>{bold}</span>
        </h3>

        <div className={Styles.faqs__imagen}>
          <img
            src="static/assets/images/adviser.svg"
            alt={`${title} ${bold}`}
          />
        </div>
      </div>

      {items.map((item, i) => (
        <Collapse key={i} title={item.name}>
          {item.description}
        </Collapse>
      ))}
    </div>
  );
};

export default Faqs;
