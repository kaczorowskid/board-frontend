import { Outlet } from 'react-router-dom';
import { Container, ContentContainer, MainContainer } from './Public.styled';

export const PublicLayout = () => (
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
