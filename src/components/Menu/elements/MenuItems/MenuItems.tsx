import { MenuItemProps } from './MenuItems.type';
import { Container, Icon, Item, ItemName } from './MnuItems.styled';

export const MenuItems = ({ data }: MenuItemProps) => (
  <Container>
    {data.map(({ isClicked, name, icon, onClick }) => (
      <Item isClicked={isClicked} onClick={onClick}>
        <Icon>{icon}</Icon>
        <ItemName>{name}</ItemName>
      </Item>
    ))}
  </Container>
);
