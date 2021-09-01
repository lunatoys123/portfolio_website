import styled from "styled-components";

export const SubMenuPanel = styled.aside`
  box-shadow: var(--dark-shadow);
  background: var(--clr-white);
  position: absolute;
  z-index: 3;
  padding: 2rem;
  border-radius: 25px;
  top:4rem;
  display: ${props => (props.subMenuOpen ?'block':'none')};

  &:before {
    content: "";
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    top: -5px;
    transform: translateX(-50%);
  }
  
`;
