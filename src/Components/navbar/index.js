import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { links } from "./data";
import { useGlobalContext } from "../../context";
const Header = () => {
  const { isEnglish, setEnglish, setChinese, openSubMenu, closeSubMenu } = useGlobalContext();
  const [linkname, setLinkname] = useState([]);
  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempPos = e.target.getBoundingClientRect();
    const center = tempPos.left ;
    const bottom = tempPos.bottom;
    openSubMenu(page, {center, bottom});
  };

  useEffect(() => {
    setLinkname([]);
    if (isEnglish) {
      let EnglishTitle = links.filter((L) => L.language === "English");
      EnglishTitle.map((item) => {
        setLinkname((name) => [...name, item.name]);
      });
    } else {
      let ChineseTitle = links.filter((L) => L.language === "chinese");
      ChineseTitle.map((item) => {
        setLinkname((name) => [...name, item.name]);
      });
    }
  }, [isEnglish]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onMouseOver={closeSubMenu}>Lau Kin Tung Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" onMouseLeave={closeSubMenu}>
            {linkname.map((item, index) => {
              return (
                <Nav.Link key={index} onMouseOver={displaySubMenu}>
                  {item}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav>
            <Nav.Link onClick={setChinese}>chinese</Nav.Link>
            <Nav.Link onClick={setEnglish}>English</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
