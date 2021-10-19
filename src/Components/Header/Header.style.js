import styled from "styled-components";

export const Background = styled.div`
  background-color: #c4c4c4;
  filter: -shadow(2px 2px 2px black);
`;

export const CenterElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  padding: 20px 0px;

  h2 {
    text-shadow: 2px 2px #dfbf9f;
    font-size: 48px;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: bold;
  }

  p {
    text-shadow: 1px 1px #dfbf9f;
    font-size: 24px;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: normal;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
