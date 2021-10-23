import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BackGroundLayout, Shadow } from "./workProject.style";
import { ProjectData } from "./data";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
const WorkProject = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <BackGroundLayout onMouseOver={closeSubMenu}>
      <Row xs="auto" md={3} className="g-4">
        {ProjectData.map((item, idx) => {
          const { ImageUrl, Title, Introduction } = item;
          return (
            <Col key={idx}>
              <Shadow>
                <Card>
                  <Card.Img variant="top" src={ImageUrl} />
                  <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>{Introduction}</Card.Text>
                    <Link to={{pathname:`WorkProject/${Title}`, state: ProjectData}}>Go to this project</Link>
                  </Card.Body>
                </Card>
              </Shadow>
            </Col>
          );
        })}
      </Row>
    </BackGroundLayout>
  );
};

export default WorkProject;
