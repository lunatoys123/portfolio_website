import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Toggle, Sidebar } from "./Learning.style";
import Offcanvas from "react-bootstrap/Offcanvas";
import { links } from "../navbar/data";
import { useGlobalContext } from "../../context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Learning = () => {
  const [show, setShow] = useState(false);
  const { isEnglish } = useGlobalContext();
  const [link, setLink] = useState([]);
  const [selectedYear, setSelectedYear] = useState(1);
  
  useEffect(() => {
    const sublink = links.find(
      (sub) => sub.language === "English" && sub.name === "Learning"
    );
    const { link } = sublink;
    setLink(link);
  }, [isEnglish]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={1}>
            <Toggle onClick={() => setShow(true)}>
              <FaBars />
            </Toggle>
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
                          <a>{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </Sidebar>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col xs={16} md={11}>Content part</Col>
        </Row>
      </Container>
    </>
  );
};

export default Learning;
