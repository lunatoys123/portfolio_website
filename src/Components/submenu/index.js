import React, { useEffect, useRef } from "react";
import { SubMenuPanel } from "./submenu.style";
import { useGlobalContext } from "../../context";
const Submenu = () => {
  const {
    page: {  name, link },
    location,
    isSubMenuOpen
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
      const submenu = container.current;
      const {center, bottom} = location;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
  }, [name, link, location]);

  return <SubMenuPanel ref={container} subMenuOpen={isSubMenuOpen} >hello</SubMenuPanel>;
};

export default Submenu;
