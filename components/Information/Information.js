import styles from "./Information.module.scss";

const Information = ({ Data }) => {
  return (
    <div
      className={`${styles["information"]} ${
        !Data && styles["information__none"]
      }`}
    >
      <div className={styles["information__wrap"]}>
        <div className={styles["information__header"]}>
          <img src="static/assets/images/logo.svg" alt="os" />
        </div>

        {Data && (
          <div className={styles["information__content"]}>
            <h1>
              Seguro de <span className="block font-normal">Salud</span>
            </h1>
            <ul>
              <li>
                <i className="icon-shield mr-1"></i> Cómpralo de manera fácil y
                rápida
              </li>
              <li>
                <i className="icon-mobile mr-1"></i> Cotiza y compra tu seguro
                100% digital
              </li>
              <li>
                <i className="icon-money mr-1"></i> Hasta S/.12 millones de
                cobertura anual
              </li>
              <li>
                <i className="icon-clinic mr-1"></i> Más de 300 clínicas en todo
                el Perú
              </li>
            </ul>
            <p className="small text-pink">© 2021 Rimac Seguros y Reaseguros</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Information;
