import React from "react";
import { Wrapper } from "./Footer.style";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillGithub, AiFillPhone, AiFillWechat } from "react-icons/ai";
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
            <Col><h3 align="center">SiteMap</h3></Col>
        </Row>
        <Row>
          <Col><h5>Contact me</h5></Col>
          <Col><h5>Learning</h5></Col>
          <Col><h5>Work Projects</h5></Col>
          <Col><h5>Activities</h5></Col>
        </Row>
        <Row>
            <Col><AiFillFacebook size={20} /> Facebook</Col>
            <Col><AiFillGithub size={20} /> Github</Col>
            <Col><AiFillPhone size={20} /> 66426006</Col>
            <Col><AiFillWechat size={20} /> wechat</Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
