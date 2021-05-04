const messageRequerid = (value) => {
  const {
    userDocNumber,
    userName,
    userSurname,
    userSecondSurname,
    userFullName,
    userDate,
    userMobile,
    userTerms,
    userSends,
    userSecureType,
  } = value;

  const message = {};

  if (userDocNumber === "") {
    message.userDocNumber = "Debe ingresar un número de documento";
  }

  if (userName === "") {
    message.userName = "Debe ingresar un nombre";
  }

  if (userSurname === "") {
    message.userSurname = "Debe ingresar un apellido paterno";
  }

  if (userSecondSurname === "") {
    message.userSecondSurname = "Debe ingresar un apellido materno";
  }

  if (userFullName === "") {
    message.userFullName = "Debe ingresar su nombre y apellido";
  }

  if (userDate === "") {
    message.userDate = "Debe ingresar la fecha de nacimiento";
  }

  if (userMobile === "") {
    message.userMobile = "Debe ingresar un número de celular";
  }

  if (userTerms === "") {
    message.userTerms = "Debe aceptar los Términos y Condiciones";
  }

  if (userSends === "") {
    message.userSends = "Debe aceptar la Política de Envío";
  }

  if (userSecureType === "") {
    message.userSecureType = "Debe indicar el/la ó los beneficiarios";
  }

  return message;
};

export default messageRequerid;
