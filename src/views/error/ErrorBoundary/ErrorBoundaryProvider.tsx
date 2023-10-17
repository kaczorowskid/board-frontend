import { ErrorBoundary } from 'react-error-boundary';
import { FallbackComponent } from './components';
import { ErrorBoundaryProviderProps } from './ErrorBoundaryProvider.types';

export const ErrorBoundaryProvider = ({
  children
}: ErrorBoundaryProviderProps): JSX.Element => (
  <ErrorBoundary FallbackComponent={FallbackComponent}>
    {children}
  </ErrorBoundary>
);
