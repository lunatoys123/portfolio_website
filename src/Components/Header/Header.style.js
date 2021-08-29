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

`
