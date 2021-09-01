import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const setEnglish = () => {
    setIsEnglish(true);
  };

  const setChinese = () => {
    setIsEnglish(false);
  };
  return (
    <AppContext.Provider value={{ isEnglish, setEnglish, setChinese }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
