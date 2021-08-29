import React from "react";
import { BackGround, Navbar, LinkStyle, Setting, Container } from "./Header.style";
const Header = () => {
  return (
    <>
      <BackGround>
        <Navbar>
          <h3>Lau Kin Tung Portfolio</h3>
          <LinkStyle>
            <ul>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>Learning</a>
              </li>
              <li>
                <a>work Project</a>
              </li>
              <li>
                <a>Activities</a>
              </li>
            </ul>
          </LinkStyle>
          <Setting>
            <span>中</span>
            <span>Eng</span>
          </Setting>
        </Navbar>
        <Container>
          
        </Container>        
      </BackGround>
    </>
  );
};

export default Header;
