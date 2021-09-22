import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Toggle, Sidebar, ToggleLayout } from "./Learning.style";
import Offcanvas from "react-bootstrap/Offcanvas";
import { links } from "../navbar/data";
import { useGlobalContext } from "../../context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Year from "./Year";
import { AiFillBook } from "react-icons/ai";
import Background from '../../Images/Learning.png'
const Learning = () => {
  const [show, setShow] = useState(false);
  const { closeSubMenu } = useGlobalContext();
  const [link, setLink] = useState([]);
  
  useEffect(() => {
    const sublink = links.find(
      (sub) => sub.name === "Learning"
    );
    const { link } = sublink;
    setLink(link);
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <ToggleLayout Background={Background} onMouseOver={closeSubMenu}>
            <Toggle onClick={() => setShow(true)}>
              <FaBars />
            </Toggle>
          </ToggleLayout>
          <Offcanvas show={show} onHide={() => setShow(false)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Learning</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Sidebar>
                <ul>
                  {link.map((item, index) => {
                    return (
                      <li key={index}>
                        <AiFillBook />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </Sidebar>
            </Offcanvas.Body>
          </Offcanvas>
        </Row>
        <Row><Col align="center"><Year /></Col></Row>
      </Container>
    </>
  );
};

export default Learning;
