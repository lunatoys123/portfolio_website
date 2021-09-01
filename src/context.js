import React, { useContext, useState } from "react";
import { links } from "./Components/navbar/data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const setEnglish = () => {
    setIsEnglish(true);
  };

  const setChinese = () => {
    setIsEnglish(false);
  };

  const openSubMenu = (text) => {
    console.log(text);
    links.map((SingleLink, index) => {
      const { link } = SingleLink;
      console.log(link);
    });
  };
  return (
    <AppContext.Provider
      value={{ isEnglish, setEnglish, setChinese, openSubMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
