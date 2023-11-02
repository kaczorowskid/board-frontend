import { useQueryClient } from '@tanstack/react-query';
import { FallbackProps } from 'react-error-boundary';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routesUrls } from 'routes';
import { useTranslation } from 'react-i18next';
import {
  ButtonsContainer,
  Container,
  InfoBox
} from './FallbackComponent.styled';

export const FallbackComponent = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  resetErrorBoundary
}: FallbackProps): JSX.Element => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

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
        <h2>{t('error.something-went-wrong')}</h2>
        <ButtonsContainer>
          <Button onClick={handleGoToDashboard}>
            {t('error.go-to-dashboard')}
          </Button>
          <Button onClick={handleResetError}>{t('error.reset')}</Button>
        </ButtonsContainer>
      </InfoBox>
    </Container>
  );
};
