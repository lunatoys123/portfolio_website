import React, { useContext, useState } from "react";
import { links } from "./Components/navbar/data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ name: "", link: [] });
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const setEnglish = () => {
    setIsEnglish(true);
  };

  const setChinese = () => {
    setIsEnglish(false);
  };
  

  const openSubMenu = (text, coordinate) => {
    if (isEnglish) {
      const page = links.find(
        (L) => L.language === "English" && L.name === text
      );
      setPage(page);
    } else {
      const page = links.find(
        (L) => L.language === "chinese" && L.name === text
      );
      setPage(page);
    }
    setLocation(coordinate);
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isEnglish,
        setEnglish,
        setChinese,
        openSubMenu,
        closeSubMenu,
        page,
        location,
        isSubMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
