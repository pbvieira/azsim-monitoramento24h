import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
    margin :0;
    padding: 0;
    box-sizing: border-box !important;
    outline: none;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    scrollbar-width: none;
    overflow-y: visible;
}

html{
  max-height:100vh;
}

body {
    background-color: #f5f5f5;
    max-height:100vh;
}
`