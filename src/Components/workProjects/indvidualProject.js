import React, { useEffect, lazy } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation, useParams } from "react-router-dom";

const Navbar = lazy(() => import("../navbar"));
const Submenu = lazy(()=>import("../submenu"));
const Footer = lazy(()=>import("../Footer"));

const IndvidualProject = () => {
  const location = useLocation();
  const { title } = useParams();

  return (
    <>
      <Navbar />
      <Container style={{marginTop: '15px', marginRight: 'auto', marginLeft:'auto', maxwidth:'1280px',minHeight:'800px'}}>
        <Row className="justify-content-md-center">Title</Row>
      </Container>
      <Submenu />
      <Footer />
    </>
  );
};

export default IndvidualProject;
