import React from "react";
//import "./MainContentExtra.css";
import Card from "react-bootstrap/Card";
import { Wrapper, Image, Center } from "./MainContent.style";
import icon from "../../Images/icon.png";
const Content = () => {
  return (
    <Wrapper>
      <Card bg="secondary">
        <Center>
          <Image src={icon} alt="icon"></Image>
        </Center>
        <Center>
          <Card.Title>Title of Activities</Card.Title>
        </Center>
        <Card.Body>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Date</small>
        </Card.Footer>
      </Card>
    </Wrapper>
  );
};

export default Content;
