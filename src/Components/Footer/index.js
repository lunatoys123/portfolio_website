import React from "react";
import {
  Wrapper,
  CopyRight,
  Title,
  SiteMap,
  Follow,
  FollowLayout,
} from "./Footer.style";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillPhone,
  AiFillWechat,
} from "react-icons/ai";
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col sm={8}>
            <Title>SiteMap</Title>
          </Col>
          <Col sm={4}>
            <Title>Follow me</Title>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <SiteMap>Contact me</SiteMap>
          </Col>
          <Col sm={2}>
            <SiteMap>Learning</SiteMap>
          </Col>
          <Col sm={2}>
            <SiteMap>Work Projects</SiteMap>
          </Col>
          <Col sm={2}>
            <SiteMap>Activities</SiteMap>
          </Col>
          <Col sm={4}>
            <FollowLayout>
              <Follow>
                <AiFillFacebook />
                Facebook
              </Follow>
              <Follow>
                <AiFillGithub />
                GitHub
              </Follow>
              <Follow>
                <AiFillPhone />
                66426006
              </Follow>
              <Follow>
                <AiFillWechat />
                wechat
              </Follow>
            </FollowLayout>
          </Col>
        </Row>
      </Container>
      <hr />
      <CopyRight>
        <small>
          CopyRight <span>&copy;</span> belong to Lau Kin Tung. All Right
          Reserved
        </small>
      </CopyRight>
    </Wrapper>
  );
};

export default Footer;
