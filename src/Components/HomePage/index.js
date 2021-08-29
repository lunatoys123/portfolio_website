import React from "react";
import { BackGround, Panel } from "./Homepage.style";
import icon from "../../Images/icon.png";

const HomePage = () => {
  return (
    <>
      <BackGround>
        <Panel>
          <h3 align="center">Recent Activities</h3>
          <div className="content">
            <div className="left-panel">
              <img src={icon} alt="icon" />
            </div>
            <div className="right-panel">
              <div className="title">
                <span>title</span>
              </div>
              <div className="title">
                <span>Date</span>
              </div>
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </Panel>
        
      </BackGround>
    </>
  );
};

export default HomePage;
