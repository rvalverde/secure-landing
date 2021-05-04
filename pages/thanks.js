import Link from "next/link";

import Button from "@components/Button/Button";
import Information from "@components/Information/Information";
import Layout from "@components/Layout";
import Heading from "@components/Heading/Heading";

const headingDescription = (
  <span>
    Queremos conocer mejor la salud de los asegurados. Un asesor{" "}
    <strong>se pondrá en contacto</strong> contigo en las siguientes{" "}
    <strong>48 horas</strong>.
  </span>
);

const Thanks = () => {
  return (
    <Layout>
      <div className="container grid grid--2">
        <Information />

        <div className="vert-sm-center">
          <div className="col-480">
            <div className="thanks">
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcset="static/images/thanks-mobile.svg"
                />
                <img src="static/assets/images/thanks.svg" alt="Gracias" />
              </picture>
            </div>

            <Heading
              title="¡Gracias por"
              bold="confiar en nosotros!"
              description={headingDescription}
            />

            <p className="text-right mt-3">
              <Link href="https://rimac.com.pe/" passHref>
                <Button label="Ir a salud rimac" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Thanks;
