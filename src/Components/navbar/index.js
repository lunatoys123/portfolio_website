import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ListGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import './Navbar.style.css';
const Header = () => {
  return (
    <Container fluid className="Container">
      <Row>
        <Col sm={2}>
          <p className="title">Lau Kin Tung profolio</p>
        </Col>
        <Col sm={8}>
          <ListGroup horizontal className='ListgroupCenter'>
            <ListGroup.Item>Contact us</ListGroup.Item>
            <ListGroup.Item>Contact us</ListGroup.Item>
            <ListGroup.Item>Contact us</ListGroup.Item>
            <ListGroup.Item>Contact us</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={2}>
        <ListGroup horizontal>
            <ListGroup.Item>chinese</ListGroup.Item>
            <ListGroup.Item>English</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
