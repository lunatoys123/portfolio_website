import styled from "styled-components";

export const BackGroundLayout = styled.div`
    height: 100%;
    min-height: 1000px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-top:20px;
`;

export const Shadow = styled.div`
    filter: drop-shadow(3px 3px 3px black);
    transition: all 0.3s linear;
    :hover{
        transform: scale(1.05);
    }
`