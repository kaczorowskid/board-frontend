import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'utils';
import { GlobalStyle, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { Routes } from 'routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </QueryClientProvider>
);
