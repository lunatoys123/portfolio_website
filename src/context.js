import React, { useContext, useState } from "react";
import { links } from "./Components/navbar/data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ name: "", link: [] });
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);


  const openSubMenu = (text, coordinate) => {

    const page = links.find(
        (L) =>  L.name === text
      );
      setPage(page);
    
    setLocation(coordinate);
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
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
