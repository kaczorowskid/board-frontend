export const colors = {
  white: '#fff',
  darkWhite: 'rgba(255, 255, 255, 0.85)',
  lightBlack: 'rgba(0, 0, 0, 0.88)',
  argent: '#bfbfbf',
  silver: '#a2abb5',
  blueberry: '#5d7df3',
  antiFlashWhite: '#f2f2f2',
  philippineGray: '#8e8e8e',
  eerieBlack: '#18191a',
  raisinBlack: '#242526',
  onyx: '#393939',
  queenBlue: '#425c9d',
  lightGray: '#d5d5d5',
  black: '#000',
  blackOlive: '#404040',
  cultured: '#f7f7f7',
  ghostWhite: '#f9fafa',
  yankeesBlue: '#182545',
  antiFlashWhite100: '#f0f0f0',
  royalBlue: '#4062e3'
} as const;

export type ColorsType = typeof colors;
