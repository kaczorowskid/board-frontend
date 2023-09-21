import { createGlobalStyle } from 'styled-components';
import { button, calendar, input, table } from './components';

export const GlobalStyle = createGlobalStyle`
  html, * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Manrope', sans-serif;
    color: black;
  }

  body {
    margin: 0;
    background-color: #f9fafa;

  }

  ${input}
  ${button}
  ${table}
  ${calendar}
`;
