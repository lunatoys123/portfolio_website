import styled from "styled-components";

export const SubMenuPanel = styled.aside`
  box-shadow: var(--dark-shadow);
  background: var(--clr-white);
  position: absolute;
  z-index: 3;
  padding: 2rem;
  top: 4rem;
  border-radius: 25px;
  display: ${(props) => (props.subMenuOpen ? "block" : "none")};
  transition: all 0.3s linear;

  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
    position: absolute;
    top: -5px;
  }
`;

export const Col2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  a {
    width: 5rem;
    margin: 10px;
  }
`;
