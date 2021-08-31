import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { links } from "./data";
const Header = ({ callBack, English }) => {
  const [NavLink, setNavLinks] = useState([]);
  useEffect(() => {
    setNavLinks([]);
    links.map((singleLink, index) => {
      const { link } = singleLink;
      link.map((item, index) => {
        const { language, name } = item;
        if (English) {
          if (language === "English") {
            setNavLinks(OldLink=>[...OldLink, name]);
          }
        } else {
          if (language === "chinese") {
            setNavLinks(OldLink=>[...OldLink, name]);
          }
        }
        return null;
      });
      return null;
    });
  }, [English]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Lau Kin Tung Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {NavLink.map((item, index)=>{
              return <Nav.Link key={index} >{item}</Nav.Link>
            })}
          </Nav>
          <Nav>
            <Nav.Link onClick={() => callBack(false)}>chinese</Nav.Link>
            <Nav.Link onClick={() => callBack(true)}>English</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
