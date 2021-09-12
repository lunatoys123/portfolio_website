import React, { useEffect, useRef } from "react";
import { SubMenuPanel, Col2 } from "./submenu.style";
import { useGlobalContext } from "../../context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <Col2>
        {link.map((item, index) => {
          return <Link key={index} to={`/Learning/${item}`}>{item}</Link>;
        })}
      </Col2>
    </SubMenuPanel>
  );
};

export default Submenu;
