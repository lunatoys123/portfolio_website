import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Background, CenterElement, Logo } from "./Header.style";
import icon from "./../../Images/icon.png";
import { Title, SimpleInfo } from "./data";
import { useGlobalContext } from "../../context";
const Header = () => {
  const { isEnglish,closeSubMenu } = useGlobalContext();
  const [title, setTitle] = useState("");
  const [Intro, setIntro] = useState("");

  useEffect(() => {
    if (isEnglish) {
      let title = Title.find((t) => t.language === "English");
      let Intro = SimpleInfo.find((t) => t.language === "English");

      const { name } = title;
      const { Info } = Intro;

      setTitle(name);
      setIntro(Info);
    } else {
      let title = Title.find((t) => t.language === "chinese");
      let Intro = SimpleInfo.find((t) => t.language === "chinese");

      const { name } = title;
      const { Info } = Intro;

      setTitle(name);
      setIntro(Info);
    }
  }, [isEnglish]);
  return (
    <Background onMouseOver={closeSubMenu}>
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
              <p align="center">
                {Intro}
              </p>
            </CenterElement>
          </Col>
        </Row>
      </Container>
    </Background>
  );
};

export default Header;
