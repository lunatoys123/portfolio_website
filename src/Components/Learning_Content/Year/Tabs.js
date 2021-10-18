import React, { useState, useEffect } from "react";
import { TableLayout, TabLayout, ImgHolder, ColLayout } from "./Year.style";
import { ChevronDoubleUp, ChevronDoubleDown } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Table from "react-bootstrap/Table";

const Tabs = ({ data, Format, year }) => {
  const [open, setOpen] = useState(false);
  const [TableTitle, setTitle] = useState("");
  const [TableHeader, setHeader] = useState([]);
  const [TableContent, setTableContent] = useState([]);
  const [TableCourse, setTableCourse] = useState([]);

  const handleGPA = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (Format === 1) {
      const { Title, Header, Content } = data;
      setTitle(Title);
      setHeader(Header);
      setTableContent(Content);
    } else if (Format === 2) {
      const YearData = data.find((d) => d.key === year);
      const { Title, course } = YearData;
      setTitle(Title);
      setTableCourse(course);
    }
  }, [year]);

  let iconStyle = { width: "100%", height: "100%" };
  return (
    <ColLayout>
      <TabLayout>
        <Container fluid>
          <Row>
            <Col>
              <h3>{TableTitle}</h3>
            </Col>
            <Col align="right">
              <ImgHolder onClick={handleGPA} align="center">
                {open ? (
                  <ChevronDoubleDown style={iconStyle} />
                ) : (
                  <ChevronDoubleUp style={iconStyle} />
                )}
              </ImgHolder>
            </Col>
          </Row>
        </Container>
      </TabLayout>
      <TableLayout>
        <Collapse in={open}>
          <div>
            {Format === 1 && (
              <Table striped bordered responsive hover>
                <thead>
                  <tr>
                    {TableHeader.map((item, index) => {
                      return <th key={index}>{item}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {TableContent.map((item, index) => {
                    const { Grade, Academic_Performance, GPA } = item;
                    return (
                      <tr key={index}>
                        <td>{Grade}</td>
                        <td>{Academic_Performance}</td>
                        <td>{GPA}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
            {Format === 2 && (
              <ColLayout>
                {TableCourse.map((course, index) => {
                  const { CourseTitle, Grade, Description } = course;
                  return (
                    <Table striped bordered responsive key={index}>
                      <thead>
                        <tr>
                          <th style={{width: '80%'}}>{CourseTitle}</th>
                          <th>{Grade}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="2">{Description}</td>
                        </tr>
                      </tbody>
                    </Table>
                  );
                })}
              </ColLayout>
            )}
          </div>
        </Collapse>
      </TableLayout>
    </ColLayout>
  );
};

export default Tabs;
