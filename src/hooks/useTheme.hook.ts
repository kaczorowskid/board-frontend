import { THEME } from 'constants/themeKey';
import { ThemeContext } from 'context';
import { useContext } from 'react';
import { ThemeOptions } from 'types';

interface UseTheme {
  appTheme: ThemeOptions;
  handleChangeTheme: (option: ThemeOptions) => void;
}

export const useTheme = (): UseTheme => {
  const { appTheme, setAppTheme } = useContext(ThemeContext);

  const handleChangeTheme = (theme: ThemeOptions): void => {
    localStorage.setItem(THEME, theme);
    setAppTheme(theme);
  };

  return { appTheme, handleChangeTheme };
};
