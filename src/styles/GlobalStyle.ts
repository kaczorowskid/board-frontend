import { createGlobalStyle } from 'styled-components';
import { button, input, table } from './components';

export const GlobalStyle = createGlobalStyle`
  html, * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Manrope', sans-serif;
    color: black;
    background-color: white;
  }

  body {
    margin: 0;
  }

  ${input}
  ${button}
  ${table}
`;
