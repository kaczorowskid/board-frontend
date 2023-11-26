import { Routes } from 'routes';
import { GlobalStyle } from 'styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from 'hooks';
import { antdTheme, theme } from 'theme';
import { ConfigProvider } from 'antd';

export const App = (): JSX.Element => {
  const { appTheme } = useTheme();

  return (
    <StyledThemeProvider theme={theme(appTheme)}>
      <ConfigProvider theme={antdTheme(appTheme)}>
        <GlobalStyle />
        <Routes />
      </ConfigProvider>
    </StyledThemeProvider>
  );
};
