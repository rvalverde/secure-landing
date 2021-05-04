import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({
    userDocType: "",
    userDocNumber: "",
    userDate: "",
    userMobile: "",
    userGender: "",
    userFullName: "",
    userName: "",
    userSurname: "",
    userSecondSurname: "",
    userSecureType: "",
    userPlan: "",
    userMembers: [],
    userTerms: "",
    userSends: "",
  });

  const [userLogin, setUserLogin] = useState(false);

  return (
    <AppContext.Provider value={{ data, setData, userLogin, setUserLogin }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
