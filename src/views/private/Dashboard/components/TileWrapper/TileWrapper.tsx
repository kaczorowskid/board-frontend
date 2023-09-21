import { Container, Header, Tile, Title } from './TileWrapper.styled';
import { TileWrapperProps } from './TileWrapper.types';

export const TileWrapper = ({ title, children }: TileWrapperProps) => (
  <Container>
    <Header>{title && <Title>{title}</Title>}</Header>
    <Tile>{children}</Tile>
  </Container>
);
