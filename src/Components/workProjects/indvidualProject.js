import React, { useEffect, lazy, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation, useParams } from "react-router-dom";
import graph from "../../Images/comp3047-web-diagram.png";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import { ProjectData } from "./data";

const Navbar = lazy(() => import("../navbar"));
const Submenu = lazy(() => import("../submenu"));
const Footer = lazy(() => import("../Footer"));

const IndvidualProject = () => {
  const location = useLocation();
  const { title } = useParams();
  const[ProjectPanelTitle, setProjectPanelTitle] =useState([]);

  useEffect(() => {
    setProjectPanelTitle([]);
    if (location.state == null) {
      ProjectData.map((item, index)=>{
        const {Title} = item;
        return setProjectPanelTitle((ProjectTitle)=>[...ProjectTitle, Title]);
      })
    } else {
      console.log(location.state);
      location.state.map((item, index)=>{
        const {Title} = item;
        return setProjectPanelTitle((ProjectTitle)=>[...ProjectTitle, Title]);
      })
    }
  }, [location, title]);

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: "red",
        height: 1,
        width: "100%",
      }}
    />
  );

  return (
    <>
      <Navbar />
      <Container
        fluid
        style={{
          maxwidth: "1280px",
          minHeight: "100vh",
        }}
      >
        <Row>
          <Col
            sm={2}
            style={{ borderRight: "1px solid #ffcccc", height: "100vh" }}
          >
            {ProjectPanelTitle.map((item, index)=>{
              return <p key={index}>{item}</p>
            })}
          </Col>
          <Col sm={10}>
            <Row>
              <Row
                className="justify-content-md-center"
                style={{ padding: "20px" }}
              >
                <h2 style={{ textAlign: "center" }}>{title}</h2>
              </Row>
              <Row style={{ height: "1px" }}>
                <ColoredLine color="#ffcccc" />
              </Row>

              <Row className="justify-content-md-center">
                <Col
                  sm={6}
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    borderRight: "1px solid #ffcccc",
                  }}
                >
                  <Image
                    src={graph}
                    style={{
                      width: "80%",
                      height: "70%",
                      border: "1px solid black",
                    }}
                  />
                </Col>
                <Col sm={6}>
                  <Row>
                    <h3>Introduction</h3>
                  </Row>
                  <Row style={{ textIndent: "50px" }}>
                    <p>
                      Simulate a coupon system, using sail.js to compute the
                      front end Interface and function (sign in, search coupon,
                      create coupon, update coupon etc) and backend
                    </p>
                  </Row>
                  <Row>
                    <h3>Component</h3>
                  </Row>
                  <Row>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th style={{ width: "30%" }}>Component</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ width: "30%" }}>Model</td>
                          <td>
                            <ListGroup>
                              <ListGroup.Item>
                                Model use to handle the database data with the
                                ability to create record, update record, delete
                                record and search record
                              </ListGroup.Item>
                              <ListGroup.Item>
                                User database contains user information
                                including username, password, role, balance etc
                              </ListGroup.Item>
                              <ListGroup.Item>
                                Restaurant database contains coupon information
                                including coupon title, restaurant url,
                                restaurant name, Restaurant Region, coupon
                                price, restaurant mall location, restaurant
                                details
                              </ListGroup.Item>
                            </ListGroup>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "30%" }}>Controller</td>
                          <td>
                            <ListGroup>
                              <ListGroup.Item>
                                Controller responsible for handling logic of the
                                web app. It sends request to Model to receive
                                data and send response to the view to display
                                the response data.
                              </ListGroup.Item>
                              <ListGroup.Item>
                                User controller responsible for handling user
                                actions. for example, login, redeem coupon and
                                logout
                              </ListGroup.Item>
                              <ListGroup.Item>
                                
                              </ListGroup.Item>
                            </ListGroup>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Row>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
      <Submenu />
      <Footer />
    </>
  );
};

export default IndvidualProject;
