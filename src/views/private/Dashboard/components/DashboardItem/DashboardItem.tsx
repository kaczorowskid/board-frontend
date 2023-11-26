import {
  Container,
  GridContainer,
  Header,
  Tile,
  Title
} from './DashboardItem.styled';
import { TileItemProps } from './DashboardItem.types';

export const DashboardItem = ({
  title,
  gridArea,
  component
}: TileItemProps): JSX.Element => (
  <GridContainer gridArea={gridArea}>
    <Container>
      <Header>{title && <Title>{title}</Title>}</Header>
      <Tile>{component}</Tile>
    </Container>
  </GridContainer>
);
