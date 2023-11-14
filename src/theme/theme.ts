import { ThemeOptions } from 'types';
import { dark, light, lightTheme } from './colors';

export const theme = (themeOptions: ThemeOptions) => ({
  colors: {
    white: '#fff',
    buttonPrimaryHover: '#4062e3',
    ...lightTheme
    // ...(themeOptions === 'dark' ? dark : light)
  },
  gapp: {
    smaller: '8px',
    small: '12px',
    normal: '16px',
    large: '24px'
  }
});
