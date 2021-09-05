import React, { useState } from "react";
import {
  TableLayout,
  TabLayout,
  ImgHolder,
} from "./Year.style";
import { ChevronDoubleUp, ChevronDoubleDown } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

const Tabs = ({element}) => {
  const [open, setOpen] = useState(false);
  const handleGPA = () => {
    setOpen(!open);
  };

  let iconStyle = { width: "100%", height: "100%" };
  return (
    <>
      <TabLayout>
        <Container>
          <Row>
            <Col>
              <h3>GPA For HKBU</h3>
            </Col>
            <Col align="right">
              <ImgHolder onClick={handleGPA}>
                {open ? (
                  <ChevronDoubleUp style={iconStyle} />
                ) : (
                  <ChevronDoubleDown style={iconStyle} />
                )}
              </ImgHolder>
            </Col>
          </Row>
        </Container>
      </TabLayout>
      <TableLayout>
        <Collapse in={open}>
          {element}
        </Collapse>
      </TableLayout>
    </>
  );
};

export default Tabs;
