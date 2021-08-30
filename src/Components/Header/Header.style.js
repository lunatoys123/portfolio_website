import styled from "styled-components";

export const BackGround = styled.div`
  width: 100%;
  height: 100%;
`;

export const Navbar = styled.div`
  width: 100%;
  background-color: #8b8b8b;
  color: white;
  display: flex;

  h3 {
    margin: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 33px;
    margin-right: 100px;
  }
`;

export const LinkStyle = styled.div`
  width: 60%;
  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-grow: 1;
    text-align: center;
  }

  ul li {
    padding: 10px 20px;
  }

  ul li:hover {
    border-bottom: 2px solid red;
  }
`;

export const Setting = styled.div`
  display: flex;
  flex-grow: 1;
  span {
    margin: 0px 10px;
    padding-top: 10px;
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #c4c4c4;

  .Logo {
    background: #5c5858;
    height: 100px;
    width: 100px;
    margin: 0;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(20px);

    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  .name {
    margin: 60px 20px;
    text-align: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    text-shadow: 0 3px white;
  }

  .sample_info {
    text-align: center;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-shadow: 0 2px white;
  }
`;
