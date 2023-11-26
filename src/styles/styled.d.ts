import { theme } from 'theme';

const myTheme = theme('light');

declare module 'styled-components' {
  type Theme = typeof myTheme;
  export interface DefaultTheme extends Theme {}
}
