import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItemProps } from './MenuItems.type';
import { Container, Icon, Item, ItemName } from './MnuItems.styled';

export const MenuItems = ({ items }: MenuItemProps): JSX.Element => {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  return (
    <Container>
      {items.map(({ name, routing, icon, color, onClick }) => (
        <Item
          isClicked={routing.includes(pathname.split('/')[1])}
          onClick={() => (onClick ? onClick?.() : navigation(routing))}
          color={color}
        >
          <Icon>{icon}</Icon>
          <ItemName>{name}</ItemName>
        </Item>
      ))}
    </Container>
  );
};
