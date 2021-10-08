import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BackGroundLayout } from "./workProject.style";
import { ProjectData } from "./data";
import { useGlobalContext } from "../../context";
const WorkProject = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <BackGroundLayout onMouseOver={closeSubMenu}>
      <Row xs="auto" md={3} className="g-4">
        {ProjectData.map((item, idx) => {
          const { ImageUrl, Title, Description } = item;
          return (
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageUrl} />
                <Card.Body>
                  <Card.Title>{Title}</Card.Title>
                  <Card.Text>{Description}</Card.Text>
                  <Button>Go to this project</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </BackGroundLayout>
  );
};

export default WorkProject;
