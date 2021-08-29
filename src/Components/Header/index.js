import React from "react";
import {
  BackGround,
  Navbar,
  LinkStyle,
  Setting,
  Container,
} from "./Header.style";
import icon from '../../Images/icon.png';
const Header = () => {
  return (
    <>
      <BackGround>
        <Navbar>
          <h3>Lau Kin Tung Portfolio</h3>
          <LinkStyle>
            <ul>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Learning</a>
              </li>
              <li>
                <a href="">work Project</a>
              </li>
              <li>
                <a href="">Activities</a>
              </li>
            </ul>
          </LinkStyle>
          <Setting>
            <span>chinese</span>
            <span>Eng</span>
          </Setting>
        </Navbar>
        <Container>
          <div className="Logo">
            <img src={icon} alt="logo" />
          </div>
          <div className="name">
            <span>Lau Kin Tung</span>
          </div>
          <div className="sample_info">
            <p>
              I’m a year 3 student in HKBU, studying on computer science.
              Experience in JAVA, html, javascript. Curently working at Audit
              Commission as one year placement. Hope to be a software engineer
              in the future
            </p>
          </div>
        </Container>
      </BackGround>
    </>
  );
};

export default Header;
