import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Lau Kin Tung Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Contact me</Nav.Link>
            <Nav.Link>Learning</Nav.Link>
            <Nav.Link>work projects</Nav.Link>
            <Nav.Link>Activities</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>chinese</Nav.Link>
            <Nav.Link>English</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
