import Styles from "./Plans.module.scss";
import Plan from "@components/Plan/Plan";

const Plans = ({ userPlan, handleChange, items }) => {
  return (
    <div className={Styles.plans}>
      {items.map((item, i) => (
        <Plan
          key={i}
          checked={userPlan === item.value}
          customClass="mx-1"
          name="userPlan"
          onChange={handleChange}
          period={item.period}
          price={item.price}
          title={item.title}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default Plans;
