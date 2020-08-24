import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-light: hsl(24 50% 63% / 1);
    --color-primary: hsl(24 50% 43% / 1);
    --color-primary-dark: hsl(24 50% 23% / 1);

    --color-header-dark: hsl(12deg 71% 3% / 1);
  }

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
