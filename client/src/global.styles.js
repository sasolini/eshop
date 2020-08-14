import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    background-color:#F7F0ED;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Alata', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .page-wrapper {
    position:relative;
    max-width: 1200px;
    margin: auto;
    background-color:#fff;
  }
`;
