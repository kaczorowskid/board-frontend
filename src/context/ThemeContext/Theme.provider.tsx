import { THEME } from 'constants/themeKey';
import { ThemeOptions } from 'types';
import { useState } from 'react';
import { ThemeProviderProps } from './Theme.type';
import { ThemeContext } from './Theme.context';

export const ThemeProvider = ({
  children
}: ThemeProviderProps): JSX.Element => {
  const [appTheme, setAppTheme] = useState<ThemeOptions>(
    (localStorage.getItem(THEME) as ThemeOptions) || 'light'
  );

  const value = {
    appTheme,
    setAppTheme
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
