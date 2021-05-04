import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AppContext } from "context/AppContext";
import { itemsPlans, itemsBenefits, itemsFaqs } from "@data/Data";

import Benefits from "@components/Benefits/Benefits";
import Button from "@components/Button/Button";
import Faqs from "@components/Faqs/Faqs";
import Heading from "@components/Heading/Heading";
import Information from "@components/Information/Information";
import Layout from "@components/Layout";
import Loading from "@components/Loading/Loading";
import Plans from "@components/Plans/Plans";
import Resume from "@components/Resume/Resume";

const Sure = () => {
  const router = useRouter();

  const { data, setData } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const { userPlan, userMembers } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      router.push("/thanks");
    }, 2500);
  };

  useEffect(() => {
    setData({ ...data, userPlan: "basic" });
  }, []);

  return (
    <Layout>
      <div className="container grid grid--2">
        <Information />

        <div className="col-480">
          <Heading
            title="Elige"
            bold="tu protección"
            description="Selecciona tu plan de salud ideal."
            number="2"
            total="7"
          />

          <Plans
            userPlan={userPlan}
            handleChange={handleChange}
            items={itemsPlans}
          />

          {userMembers.length > 0 ? <Resume members={userMembers} /> : <br />}

          <Benefits
            title="Cuentas con estos beneficios:"
            items={itemsBenefits}
          />

          <Faqs
            title="Revisa nuestros"
            bold="servicios y exclusiones"
            items={itemsFaqs}
          />

          <div className="mt-2">
            <div className="sm-flex align-center justify-end">
              <a className="mr-3 text-purple">Enviar cotización por correo</a>

              <Button label="Comprar Plan" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>

      {loading ? <Loading loading={loading} /> : null}
    </Layout>
  );
};

export default Sure;
