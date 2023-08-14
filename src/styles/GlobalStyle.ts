import { createGlobalStyle } from 'styled-components';
import { button, input, table } from './components';

export const GlobalStyle = createGlobalStyle`
  html, * {
    box-sizing: border-box;
  }

  :root {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: black;
    background-color: white;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  ${input}
  ${button}
  ${table}
`;
