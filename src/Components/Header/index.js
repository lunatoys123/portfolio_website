import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HeaderExtra.css";
import icon from "./../../Images/icon.png";
const Header = () => {
  return (
    <Container fluid className="bg">
      <Row>
        <Col className="center">
          <img src={icon} alt="icon" />
        </Col>
      </Row>
      <Row>
        <Col className="center">
          <h2>Lau Kin Tung</h2>
        </Col>
      </Row>
      <Row>
        <Col className="center">
          <p>
            I’m a year 3 student in HKBU, studying on computer science.
            Experience in JAVA, html, javascript. Curently working at Audit
            Commission as one year placement. Hope to be a software engineer in
            the future
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
