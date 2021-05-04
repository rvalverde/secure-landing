import Styles from "./Benefits.module.scss";

const Benefits = ({ title, items }) => {
  return (
    <div className={Styles.benefits}>
      <div className={Styles.benefits__header}>{title}</div>

      <div className={Styles.benefits__content}>
        {items.map((item, i) => (
          <ul key={i}>
            {item.description ? (
              <li>
                <i
                  className={`${Styles.benefits__icon} ${Styles["benefits__icon--featured"]} icon-heart`}
                ></i>
                <span className={Styles.benefits__label}>{item.name}</span>
                <span className={Styles.benefits__small}>
                  {item.description}
                </span>
              </li>
            ) : (
              <li>
                <i className={`${Styles.benefits__icon} icon-heart`}></i>
                <span className={Styles.benefits__through}>{item.name}</span>
              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
