import React from "react";
import {
  Wrapper,
  CopyRight,
  SiteMap,
  Follow,
} from "./Footer.style";
import { Container, Row } from "react-bootstrap";
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
          <SiteMap>siteMap</SiteMap>
        </Row>
      </Container>
      <hr />
      <CopyRight>
        <small>
          CopyRight <span>&copy;</span> belong to Lau Kin Tung. All Right
          Reserved
        </small>
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
      </CopyRight>
    </Wrapper>
  );
};

export default Footer;
