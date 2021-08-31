import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Background, CenterElement, Logo } from "./Header.style";
import icon from "./../../Images/icon.png";
import { Title, SimpleInfo } from "./data";
const Header = ({ English }) => {
  const [title, setTitle] = useState(
    Title.find((t) => t.language === "English")["name"]
  );
  const [Intro, setIntro] = useState(
    SimpleInfo.find((t) => t.language === "English")["Info"]
  );
  useEffect(() => {
    if (English) {
      const { name } = Title.find((t) => t.language === "English");
      const { Info } = SimpleInfo.find((t) => t.language === "English");

      setTitle(name);
      setIntro(Info);
    } else {
      const { name } = Title.find((t) => t.language === "chinese");
      const { Info } = SimpleInfo.find((t) => t.language ==='chinese');

      setTitle(name);
      setIntro(Info);
    }
  }, [English]);
  return (
    <Background>
      <Container fluid>
        <Row>
          <Col>
            <CenterElement>
              <Logo src={icon} alt="icon"></Logo>
            </CenterElement>
          </Col>
        </Row>
        <Row>
          <Col>
            <CenterElement>
              <h2>{title}</h2>
            </CenterElement>
          </Col>
        </Row>
        <Row>
          <Col>
            <CenterElement>
              <p align='center'>{Intro}</p>
            </CenterElement>
          </Col>
        </Row>
      </Container>
    </Background>
  );
};

export default Header;
