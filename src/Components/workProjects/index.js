import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import webIcon from "../../Images/sails_Project.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BackGroundLayout } from "./workProject.style";
const WorkProject = () => {
  return (
    <BackGroundLayout>
      <Row xs="auto" md={3} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={webIcon} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </BackGroundLayout>
  );
};

export default WorkProject;
