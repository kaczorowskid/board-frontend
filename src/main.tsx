import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Routes } from 'Routes';
import { queryClient } from 'utils';
import { GlobalStyle } from 'styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Routes />
    </QueryClientProvider>
  </React.StrictMode>
);
