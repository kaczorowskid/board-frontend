import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'utils';
import { ThemeProvider } from 'context';
import { App } from 'App';
import 'react-quill/dist/quill.snow.css';
import { ErrorBoundaryProvider } from 'views';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundaryProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundaryProvider>
);
