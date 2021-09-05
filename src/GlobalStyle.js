import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --clr-white: #fff;
    --clr-primary-5:hsl(205, 78%, 60%);
    --clr-grey-10: hsl(210, 36%, 96%);
}
html, body{
    margin: 0;
    padding: 0;
}

`;
