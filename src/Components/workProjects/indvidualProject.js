import React, { useEffect, lazy, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation, useParams } from "react-router-dom";
// import graph from "../../Images/comp3047-web-diagram.png";
// import QPonMain from "../../Images/Qpon/QPon_main.png";
// import QPonSearch from "../../Images/Qpon/QPon_Search.png";
// import QPOnMainMember from "../../Images/Qpon/QPon_Main_member.png";
// import QPonMainAdmin from "../../Images/Qpon/QPon_Main_admin.png";
// import QPonCreate from "../../Images/Qpon/QPon_create.png";
// import QPonUpdate from "../../Images/Qpon/QPon_update.png";
// import QPonEdit from "../../Images/Qpon/QPon_Edit.png";
// import QPonredeemCoupon from "../../Images/Qpon/QPon_redeemcoupon.png";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { ProjectData } from "./data";

const Navbar = lazy(() => import("../navbar"));
const Submenu = lazy(() => import("../submenu"));
const Footer = lazy(() => import("../Footer"));

const IndvidualProject = () => {
  const location = useLocation();
  const { title } = useParams();
  const [ProjectPanelTitle, setProjectPanelTitle] = useState([]);
  const [component, setComponent] = useState([]);
  const [PageIntroduction, setPageIntroduction] = useState([]);

  useEffect(() => {
    setProjectPanelTitle([]);
    if (location.state == null) {
      ProjectData.map((item) => {
        const { Title } = item;
        return setProjectPanelTitle((ProjectTitle) => [...ProjectTitle, Title]);
      });
    } else {
      console.log(location.state);
      location.state.map((item) => {
        const { Title } = item;
        return setProjectPanelTitle((ProjectTitle) => [...ProjectTitle, Title]);
      });
    }
    const { Component, PageIntroduction } = ProjectData.find(
      (data) => data.Title === title
    );
    setComponent(Component);
    setPageIntroduction(PageIntroduction);
  }, [location, title]);

  return (
    <>
      <Navbar />
      <Container
        fluid
        style={{
          maxWidth: "100%",
          minHeight: "100vh",
        }}
      >
        <Row>
          <Col
            sm={2}
            style={{
              borderRight: "1px solid #ffcccc",
              minHeight: "100vh",
              justifyContent: "center",
            }}
          >
            {ProjectPanelTitle.map((item, index) => {
              return <p key={index}>{item}</p>;
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
              <Row className="justify-content-md-center">
                <Tabs>
                  {component.map((item, index) => {
                    const { eventKey, Table } = item;
                    return (
                      <Tab eventkey={eventKey} title={eventKey}>
                        <Row>
                          <Col sm>
                            <Row>
                              
                            </Row>
                          </Col>
                        </Row>
                      </Tab>
                    );
                  })}
                </Tabs>
                {/* <Tabs
                  defaultActiveKey="Component"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="Component" title="Component">
                    <Row>
                      <Col sm>
                        <Row>
                          <Col>
                            <Image
                              src={graph}
                              style={{
                                border: "1px solid black",
                                width:'100%',
                                height:'100%',
                              }}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col>
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
                                      Model use to handle the database data with
                                      the ability to create record, update
                                      record, delete record and search record
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      User database contains user information
                                      including username, password, role,
                                      balance etc
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      Restaurant database contains coupon
                                      information including coupon title,
                                      restaurant url, restaurant name,
                                      Restaurant Region, coupon price,
                                      restaurant mall location, restaurant
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
                                      Controller responsible for handling logic
                                      of the web app. It sends request to Model
                                      to receive data and send response to the
                                      view to display the response data.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      User controller responsible for handling
                                      user actions. for example, login, redeem
                                      coupon and logout
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      Restaurant Controller responsible for
                                      handling actions when user interact with
                                      the coupon in the coupon system. for
                                      example, Create coupon, update coupon,
                                      show coupon, searching coupon, delete
                                      coupon, add coupon to user, show the users
                                      who purchase the coupon etc.
                                    </ListGroup.Item>
                                  </ListGroup>
                                </td>
                              </tr>
                              <tr>
                                <td>View</td>
                                <td>
                                  <ListGroup>
                                    <ListGroup.Item>
                                      View use to handle to the display of the
                                      webpage, View can display the response
                                      data where Controller pass in
                                    </ListGroup.Item>
                                  </ListGroup>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Row>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="Page" title="Page Introduction">
                    <Row className="justify-content-md-center">
                      <Table striped bordered hover style={{ width: "90%" }}>
                        <thead>
                          <tr>
                            <th style={{ width: "60%" }}>page</th>
                            <th>Description</th>
                          </tr>
                          <tr>
                            <td style={{ width: "60%" }}>
                              <Row md={2}>
                                <Col>
                                  <Image
                                    src={QPonMain}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      border: "1px solid black",
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Image
                                    src={QPOnMainMember}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      border: "1px solid black",
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Image
                                    src={QPOnMainMember}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      border: "1px solid black",
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Image
                                    src={QPonMainAdmin}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      border: "1px solid black",
                                    }}
                                  />
                                </Col>
                              </Row>
                            </td>
                            <td>
                              <ListGroup>
                                <ListGroup.Item>
                                  This Page will display The Top two expensive
                                  coupon on each region, click the hyper name of
                                  the restaurant can get the details of the
                                  coupon.
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <p>
                                    The Top navbar provide functions according
                                    to user authority.
                                  </p>
                                  <ul>
                                    <li>
                                      user can only search, sign in and sign out
                                    </li>
                                    <li>
                                      member can search, sign in , sign out and
                                      review the redeemed coupon
                                    </li>
                                    <li>
                                      admin can process the function of the
                                      user. also, admin can add, update, delete
                                      coupon in the system
                                    </li>
                                  </ul>
                                </ListGroup.Item>
                              </ListGroup>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: "60%" }}>
                              <Row md={2}>
                                <Col>
                                  <Image
                                    src={QPonSearch}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      border: "1px solid black",
                                    }}
                                  />
                                </Col>
                              </Row>
                            </td>
                            <td>
                              <ListGroup>
                                <ListGroup.Item>
                                  The Searching Page contains a searching form
                                  with criteria of Region, range of coins, date.
                                  and the searching result in card form.
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  The filter result will show with pagination,
                                  each page contains 2 coupons
                                </ListGroup.Item>
                              </ListGroup>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: "60%" }}>
                              <Row md={2}>
                                <Col>
                                  <Image
                                    src={QPonCreate}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      border: "1px solid black",
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Image
                                    src={QPonUpdate}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      border: "1px solid black",
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Image
                                    src={QPonEdit}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      border: "1px solid black",
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Image
                                    src={QPonredeemCoupon}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      border: "1px solid black",
                                    }}
                                  />
                                </Col>
                              </Row>
                            </td>
                            <td>
                              <ListGroup>
                                <ListGroup.Item>
                                  If user is an admin, admin can fill up all the
                                  field on create page to add an coupon to the
                                  system for other member to buy.
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Admin can update the coupon and review the
                                  member of redeemed coupon in admin tab.
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  If Admin use to update a coupon, the
                                  corresponding data will display in the
                                  corrsponding field. admin can update the
                                  coupon by changing the value of each field and
                                  press "submit" button or delete the coupon by
                                  pressing "delete" button
                                </ListGroup.Item>
                              </ListGroup>
                            </td>
                          </tr>
                        </thead>
                      </Table>
                    </Row>
                  </Tab>
                  <Tab eventKey="Link" title="Link">
                    Link
                  </Tab>
                </Tabs> */}
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
