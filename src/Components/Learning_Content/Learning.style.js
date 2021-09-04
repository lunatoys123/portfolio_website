import styled from "styled-components";

export const Toggle = styled.button`
  left: 5rem;
  top: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--clr-primary-5);
  font-size: 2rem;
`;

export const Sidebar = styled.div`
  ul{
    list-style-type: none;
  }

  ul li{
    height : 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;

    &:hover{
      background: var(--clr-grey-10);
    }
  }

  
`;
