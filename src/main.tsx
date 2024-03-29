import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { i18n, queryClient, runtimeConfig } from 'utils';
import { ThemeProvider } from 'context';
import { App } from 'App';
import 'react-quill/dist/quill.snow.css';
import { ErrorBoundaryProvider } from 'views';
import { I18nextProvider } from 'react-i18next';
import { worker } from './mocks/browser';

if (
  runtimeConfig.environment === 'development' &&
  runtimeConfig.test === 'true'
) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <I18nextProvider i18n={i18n}>
    <ErrorBoundaryProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundaryProvider>
  </I18nextProvider>
);
