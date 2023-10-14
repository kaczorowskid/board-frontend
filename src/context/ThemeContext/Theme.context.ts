import { createContext } from 'react';
import { ThemeOptions } from 'types';

interface ThemeContextType {
  appTheme: ThemeOptions;
  setAppTheme: (option: ThemeOptions) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  appTheme: 'light',
  setAppTheme: () => {}
});
