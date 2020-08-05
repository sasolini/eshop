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
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 2rem 6rem;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
