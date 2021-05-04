import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "context/AppContext";

import messageRequerid from "@utils/messageRequerid";

import Button from "@components/Button/Button";
import Checkbox from "@components/Checkbox/Checkbox";
import DateBirth from "@components/DateBirth/DateBirth";
import Error from "@components/Error/Error";
import Heading from "@components/Heading/Heading";
import Information from "@components/Information/Information";
import Input from "@components/Input/Input";
import Layout from "@components/Layout";
import Loading from "@components/Loading/Loading";
import Select from "@components/Select/Select";

const Index = () => {
  const router = useRouter();
  const { data, setData } = useContext(AppContext);

  const {
    userDate,
    userDocNumber,
    userDocType,
    userMobile,
    userTerms,
    userSends,
  } = data;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState({});

  const handleChangeDate = (event) => {
    message.userDate = "";

    setData({ ...data, userDate: event });
  };

  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;

    message[name] = "";
    setData({ ...data, [name]: "" });

    if (name && checked) {
      setData({ ...data, [name]: true });
    }
  };

  const handleChangeNumber = (event) => {
    const { name, value } = event.target;
    const regexNumber = /^[0-9\b]+$/;

    message[name] = "";

    if (value === "" || regexNumber.test(value)) {
      setData({ ...data, [name]: value });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      messageRequerid({
        userDate,
        userDocNumber,
        userDocType,
        userMobile,
        userTerms,
        userSends,
      })
    );

    if (
      !userDate ||
      !userDocNumber ||
      !userDocType ||
      !userMobile ||
      !userTerms ||
      !userSends
    ) {
      return setError(true);
    }

    setError(false);
  };

  useEffect(() => {
    setData({ ...data, userDocType: "DNI", userTerms: "", userSends: "" });

    if (error === false) {
      setLoading(true);

      setTimeout(() => {
        router.push("/welcome");
      }, 3000);
    }
  }, [error]);

  return (
    <Layout>
      <div className="container grid">
        <Information Data />

        <div className="col-290 ml-auto">
          <Heading
            title="Obtén tu"
            bold="seguro ahora"
            description="Ingresa los datos para comenzar"
            small
          />

          <form noValidate onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-2 flex">
              <Select
                customClass="border-right-0 radius-right-0 wpx-90"
                options={["DNI", "C.E."]}
                name="userDocType"
                value={userDocType}
                onChange={handleChange}
              />

              <Input
                textHolder="Nro. de Documento"
                name="userDocNumber"
                value={userDocNumber}
                customClass="radius-left-0"
                onChange={handleChangeNumber}
                min="0"
                max="8"
              />
            </div>

            {message.userDocNumber && (
              <Error customClass="mt-n2 mb-2">{message.userDocNumber}</Error>
            )}

            <div className="mb-2">
              <DateBirth
                textHolder="Fecha de nacimiento"
                icon="icon-calendar"
                name="userDate"
                selected={userDate}
                onChange={handleChangeDate}
                adult
              />

              {message.userDate && <Error>{message.userDate}</Error>}
            </div>

            <div className="mb-2">
              <Input
                textHolder="Celular"
                name="userMobile"
                value={userMobile}
                onChange={handleChangeNumber}
                max="9"
              />

              {message.userMobile && <Error>{message.userMobile}</Error>}
            </div>

            <div className="mb-2 small text-gray-300">
              <Checkbox
                id="accept-terms"
                name="userTerms"
                value={userTerms}
                onChange={handleChangeCheckbox}
              >
                Acepto la Política de Protección de Datos Personale y los
                Términos y Condiciones.
              </Checkbox>

              {message.userTerms && (
                <Error customClass="ml-4">{message.userTerms}</Error>
              )}
            </div>

            <div className="mb-2 small text-gray-300">
              <Checkbox
                id="accept-policy"
                name="userSends"
                value={userSends}
                onChange={handleChangeCheckbox}
              >
                Acepto la Política de Envío de Comunicaciones Comerciales
              </Checkbox>

              {message.userSends && (
                <Error customClass="ml-4">{message.userSends}</Error>
              )}
            </div>

            <div className="mt-2">
              <Button label="Comencemos" />
            </div>
          </form>
        </div>
      </div>

      {loading ? <Loading loading={loading} /> : null}
    </Layout>
  );
};

export default Index;
