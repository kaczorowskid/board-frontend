import { Outlet } from 'react-router-dom';
import { Container, ContentContainer, MainContainer } from './Auth.styled';

export const AuthLayout = (): JSX.Element => (
  <>
    <MainContainer>
      <div></div>
      <div></div>
    </MainContainer>
    <Container>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Container>
  </>
);
