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
const Learning = () => {
  const [show, setShow] = useState(false);
  const { isEnglish, closeSubMenu } = useGlobalContext();
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
          <ToggleLayout>
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
        <Row><Year /></Row>
      </Container>
    </>
  );
};

export default Learning;
