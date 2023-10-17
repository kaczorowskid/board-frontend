import { useQueryClient } from '@tanstack/react-query';
import { FallbackProps } from 'react-error-boundary';
import { Button } from 'antd';
import { Container, InfoBox } from './FallbackComponent.styled';

export const FallbackComponent = ({
  error,
  resetErrorBoundary
}: FallbackProps): JSX.Element => {
  const queryClient = useQueryClient();

  const handleResetError = (): void => {
    queryClient.clear();
    resetErrorBoundary();
  };

  return (
    <Container>
      <InfoBox>dupa</InfoBox>
      <Button onClick={handleResetError}>Reset</Button>
    </Container>
  );
};
