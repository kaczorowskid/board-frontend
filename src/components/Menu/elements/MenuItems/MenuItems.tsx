import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItemProps } from './MenuItems.type';
import { Container, Icon, Item, ItemName } from './MnuItems.styled';

export const MenuItems = ({ items }: MenuItemProps) => {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  return (
    <Container>
      {items.map(({ name, routing, icon }) => (
        <Item
          isClicked={routing.includes(pathname.split('/')[1])}
          onClick={() => navigation(routing)}
        >
          <Icon>{icon}</Icon>
          <ItemName>{name}</ItemName>
          <div></div>
        </Item>
      ))}
    </Container>
  );
};
