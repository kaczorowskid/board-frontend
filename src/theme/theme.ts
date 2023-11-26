import { ThemeOptions } from 'types';
import { light, dark, colors } from './colors';
import { Theme } from './theme.type';

export const theme = (themeOptions: ThemeOptions): Theme => ({
  ...(themeOptions === 'dark' ? dark : light),
  colors,
  spacing: {
    micro: '5px',
    mini: '8px',
    smallest: '10px',
    smaller: '12px',
    small: '16px',
    semiNormal: '20px',
    normal: '24px',
    semiLarge: '30px',
    large: '40px',
    huge: '50px'
  },
  fontSize: {
    small: '12px',
    normal: '16px',
    semiLarge: '18px',
    large: '20px',
    huge: '30px',
    mega: '48px'
  },
  borderRadius: {
    smaller: '10px',
    small: '15px',
    normal: '20px',
    semiLarge: '25px',
    large: '30px'
  }
});
