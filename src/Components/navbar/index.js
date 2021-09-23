import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { links } from "./data";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
const Header = () => {
  const { openSubMenu, closeSubMenu } = useGlobalContext();
  const [linkname, setLinkname] = useState([]);
  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempPos = e.target.getBoundingClientRect();
    const center = tempPos.left;
    const bottom = tempPos.bottom;
    openSubMenu(page, { center, bottom });
  };

  useEffect(() => {
    setLinkname([]);
    links.map((item) => {
      setLinkname((name) => [...name, {name: item.name, urlname: item.urlname}]);
    });
  }, []);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onMouseOver={closeSubMenu}>
          Lau Kin Tung Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {linkname.map((item, index) => {
              const {name, urlname} = item;
              return (
                <Nav.Link key={index} onMouseOver={displaySubMenu}  style={{height: '100%'}}>
                  <Link to={`/${urlname}`} style={{textDecoration:'none', color:'white'}}>{name}</Link>
                </Nav.Link>
              );
            })}
            <Nav.Link onMouseOver={closeSubMenu}></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
