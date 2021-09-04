import React, { useEffect, useRef } from "react";
import { SubMenuPanel, Col_2 } from "./submenu.style";
import { useGlobalContext } from "../../context";
const Submenu = () => {
  const {
    page: { name, link },
    location,
    isSubMenuOpen,
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [name, link, location]);

  return (
    <SubMenuPanel ref={container} subMenuOpen={isSubMenuOpen}>
      <h4>{name}</h4>
      <Col_2>
        {link.map((item, index) => {
          return <a key={index}>{item}</a>;
        })}
      </Col_2>
    </SubMenuPanel>
  );
};

export default Submenu;
