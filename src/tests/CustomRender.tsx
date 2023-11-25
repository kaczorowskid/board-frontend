import { ReactElement, ReactNode } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { afterEach } from 'vitest';
import { DefaultState } from './defaultState';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  },
  logger: {
    // eslint-disable-next-line no-console
    log: console.log,
    // eslint-disable-next-line no-console
    warn: console.warn,
    error: () => {}
  }
});

afterEach(() => {
  queryClient.clear();
});

type Options = {
  initialState?: Partial<DefaultState>;
} & Omit<RenderOptions, 'queries'>;

type Props = {
  ui: ReactNode;
  initialState?: Options['initialState'];
};

const UIWithProviders = ({ ui }: Props): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme('light')}>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(<Route path={'*'} element={ui} />)
        )}
      />
    </ThemeProvider>
  </QueryClientProvider>
);

const customRender = (ui: ReactElement, options?: Options): RenderResult =>
  render(<UIWithProviders ui={ui} initialState={options?.initialState} />);

export * from '@testing-library/react';

export { customRender };
