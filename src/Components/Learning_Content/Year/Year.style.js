import styled from "styled-components";

export const BackGroundLayout = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin: 50px 0px;
  min-height:500px;
  height: 100%;
  max-width: 1280px;
`;

export const ImgHolder = styled.div`
  width: 30px;
  height: 30px;
  transition: all 0.3s linear;

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`;

export const TableLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-family: "Noto Sans TC", sans-serif;
  font-weight: bold;
  padding: 20px 0px;
  border: 1px transparent black;
  display: "block";
  border: 1px solid #e0e0d1;
  transition: all 1s linear;

  Table {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  Table th {
    background-color: purple;
    color: white;
  }
`;

export const TabLayout = styled.div`
  display: flex;
  height: auto;
  background-color: #ecc6d9;
  h3 {
    color: white;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: bold;
  }
`;

export const ColLayout = styled.div`
  margin: 20px 0px;
`;
