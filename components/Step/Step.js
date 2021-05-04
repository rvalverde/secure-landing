import { useRouter } from "next/router";
import Styles from "./Step.module.scss";

const Step = ({ Number, Total }) => {
  const router = useRouter();

  return (
    <div className={Styles.step}>
      <i
        className={`${Styles.step__icon} icon-goback`}
        onClick={() => router.back()}
      ></i>
      <span className={Styles.step__text}>
        <span className={Styles.step__number}>
          <span className={Styles.step__name}>Paso</span> {Number}
        </span>
        de {Total}
      </span>
    </div>
  );
};

export default Step;
