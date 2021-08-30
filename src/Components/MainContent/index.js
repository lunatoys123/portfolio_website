import React from "react";
import "./MainContentExtra.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Content = () => {
  return (

      <Container fluid className="Container">
        <Card className="center">
            <Container fluid>
                <Row>
                    <Col className="left-card">Image</Col>
                    <Col>Card Content</Col>
                </Row>
            </Container>
        </Card>
      </Container>

  );
};

export default Content;
