import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "context/AppContext";

import getUser from "@helpers/getUser";
import messageRequerid from "@utils/messageRequerid";

import Button from "@components/Button/Button";
import DateBirth from "@components/DateBirth/DateBirth";
import Error from "@components/Error/Error";
import Heading from "@components/Heading/Heading";
import Information from "@components/Information/Information";
import Input from "@components/Input/Input";
import Layout from "@components/Layout";
import Loading from "@components/Loading/Loading";
import Member from "@components/Member/Member";
import Radio from "@components/Radio/Radio";
import Select from "@components/Select/Select";

const Welcome = () => {
  const router = useRouter();
  const { data, setData, userLogin, setUserLogin } = useContext(AppContext);

  const {
    userDate,
    userDocNumber,
    userDocType,
    userGender,
    userFullName,
    userName,
    userSurname,
    userSecondSurname,
    userSecureType,
    userMembers,
  } = data;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({});

  const userData = () => {
    getUser().then((user) => {
      const userName = user.name.first;
      const userSurname = user.name.last;
      const userGender = user.gender;
      const userFullName = `${userName} ${userSurname}`;

      setData({
        ...data,

        userName: userName,
        userSurname: userSurname,
        userGender: userGender,
        userFullName: userFullName,
      });
    });
  };

  const handleChangeDate = (event) => {
    setData({ ...data, userDate: event });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    message[name] = "";

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(messageRequerid(data));

    if (open && userMembers.length === 0) {
      setMessage({
        ...message,
        userMembers: "Debe ingresar al menos 1 beneficiario",
      });

      return setError(true);
    }

    if (!userFullName || !userSecureType) {
      return setError(true);
    }

    setError(false);
  };

  useEffect(() => {
    if (userDocNumber === "44444444" && userLogin === false) {
      userData();
      setUserLogin(true);
    }

    if (error === false) {
      setLoading(true);

      setTimeout(() => {
        router.push("/sure");
      }, 3000);
    }
  }, [error]);

  const headingBold = userLogin ? userName : "¡empecemos!";
  const headingDescription = userLogin
    ? "Valida que los datos sean correctos."
    : "Cuéntanos un poco sobre ti";

  return (
    <Layout>
      <div className="container grid grid--2">
        <Information />

        <div className="col-480 col-center">
          <Heading
            title="Hola,"
            bold={headingBold}
            description={headingDescription}
            number="1"
            total="7"
          />

          {userLogin ? (
            <div>
              <h4 className="subtitle mt-2">Datos personales del titular</h4>

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
                  max="8"
                  onChange={handleChange}
                />
              </div>

              {message.userDocNumber && (
                <Error customClass="mt-n2 mb-2">{message.userDocNumber}</Error>
              )}

              <div className="mb-2">
                <Input
                  textHolder="Nombres"
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                />
                {message.userName && <Error>{message.userName}</Error>}
              </div>

              <div className="mb-2">
                <Input
                  textHolder="Apellido Paterno"
                  name="userSurname"
                  value={userSurname}
                  onChange={handleChange}
                />
                {message.userSurname && <Error>{message.userSurname}</Error>}
              </div>

              <div className="mb-2">
                <Input
                  textHolder="Apellido Materno"
                  name="userSecondSurname"
                  value={userSecondSurname}
                  onChange={handleChange}
                />
                {message.userSecondSurname && (
                  <Error>{message.userSecondSurname}</Error>
                )}
              </div>

              <div className="mb-2">
                <DateBirth
                  textHolder="Fecha de nacimiento"
                  customClass="radius-left-0"
                  selected="userDate"
                  selected={userDate}
                  onChange={handleChangeDate}
                />

                {message.userDate && <Error>{message.userDate}</Error>}
              </div>

              <div className="mb-2">
                <h5>Género</h5>

                <div className="mb-1">
                  <Radio
                    label="Masculino"
                    name="userGender"
                    value="male"
                    checked={userGender === "male"}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Radio
                    label="Femenino"
                    name="userGender"
                    value="female"
                    checked={userGender === "female"}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <h4 className="subtitle mt-2">Ingresa tu nombre</h4>

              <div className="mb-2">
                <Input
                  textHolder="Nombre y apellido"
                  name="userFullName"
                  value={userFullName}
                  onChange={handleChange}
                />
              </div>

              {message.userFullName && <Error>{message.userFullName}</Error>}
            </div>
          )}

          <div className="mb-2">
            <h4>¿A quién vamos a asegurar?</h4>

            <div className="mb-1">
              <Radio
                onClick={() => setOpen(false)}
                label="Solo a mí"
                name="userSecureType"
                value="alone"
                checked={userSecureType === "alone"}
                onChange={handleChange}
              />
            </div>

            <div>
              <Radio
                onClick={() => setOpen(true)}
                label="A mí y a mi familia"
                name="userSecureType"
                value="family"
                checked={userSecureType === "family"}
                onChange={handleChange}
              />
            </div>

            {message.userSecureType && <Error>{message.userSecureType}</Error>}
          </div>

          {open && <Member message={message} setMessage={setMessage} />}

          <div className="mt-2 text-right">
            <Button
              label="Continuar"
              icon="icon-right"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>

      {loading ? <Loading loading={loading} /> : null}
    </Layout>
  );
};

export default Welcome;
