import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Background, CenterElement, Logo } from "./Header.style";
import icon from "./../../Images/icon.png";
import { Title, SimpleInfo } from "./data";
const Header = () => {
  return (
    <Background>
      <Container fluid>
        <Row>
          <Col>
            <CenterElement>
              <Logo src={icon} alt="icon"></Logo>
            </CenterElement>
          </Col>
        </Row>
        <Row>
          <Col>
            <CenterElement>
              <h2>Lau Kin Tung</h2>
            </CenterElement>
          </Col>
        </Row>
        <Row>
          <Col>
            <CenterElement>
              <p align="center">
                I’m a year 3 student in HKBU, studying on computer science.
                Experience in JAVA, html, javascript.Curently working at Audit
                Commission as one year placement. Hope to be a software engineer
                in the future
              </p>
            </CenterElement>
          </Col>
        </Row>
      </Container>
    </Background>
  );
};

export default Header;
