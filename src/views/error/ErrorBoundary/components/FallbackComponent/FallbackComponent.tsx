import { useQueryClient } from '@tanstack/react-query';
import { FallbackProps } from 'react-error-boundary';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routesUrls } from 'routes';
import {
  ButtonsContainer,
  Container,
  InfoBox
} from './FallbackComponent.styled';

export const FallbackComponent = ({
  error,
  resetErrorBoundary
}: FallbackProps): JSX.Element => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleResetError = (): void => {
    queryClient.clear();
    resetErrorBoundary();
  };

  const handleGoToDashboard = () => {
    navigate(routesUrls.app.dashboard);
  };

  return (
    <Container>
      <InfoBox>
        <h2>Something went wrong</h2>
        <ButtonsContainer>
          <Button onClick={handleGoToDashboard}>Go to dashboard</Button>
          <Button onClick={handleResetError}>Reset</Button>
        </ButtonsContainer>
      </InfoBox>
    </Container>
  );
};
