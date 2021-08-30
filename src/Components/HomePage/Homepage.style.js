import styled from "styled-components";

export const BackGround = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`;

export const Panel = styled.div`
  width: 100%;
  height: 100%;

  .content {
    width: 60%;
    height: 100%;

    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border-radius: 25px;
    background-color: grey;
    color: white;
    filter: drop-shadow(10px 10px 10px #c4c4c4);

    .left-panel {
      display: inline-block;
      width: 30%;
      height: 100%;
      color: white;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        padding: 20px;
      }
    }

    .right-panel {
      display: inline-block;
      width: 60%;
      height: 100%;
      vertical-align: top;
      margin-top: 30px;

      .title{
          width: 50%;
          font-size: 24px;
          display: inline-block;
      }
    }
  }
`;
