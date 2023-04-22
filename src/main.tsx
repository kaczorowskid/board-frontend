import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from 'Routes';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);
