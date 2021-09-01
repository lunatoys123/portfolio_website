import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { links } from "./data";
import { useGlobalContext } from "../../context";
const Header = () => {
  const { isEnglish, setEnglish, setChinese, openSubMenu } = useGlobalContext();
  const [linkname, setLinkname] = useState([]);
  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempPos = e.target.getBoundingClientRect();
    const center = (tempPos.left + tempPos.right) / 2;
    const bottom = tempPos.bottom - 5;
    openSubMenu(page);
  };

  useEffect(() => {
    setLinkname([]);
    links.map((SingleLink, index) => {
      const { link } = SingleLink;
      if (isEnglish) {
        let thislink = link.find((L) => L.language === "English");
        const { name } = thislink;
        setLinkname((L) => [...L, name]);
      } else {
        let thislink = link.find((L) => L.language === "chinese");
        const { name } = thislink;
        setLinkname((L) => [...L, name]);
      }
    });
  }, [isEnglish]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Lau Kin Tung Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
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
