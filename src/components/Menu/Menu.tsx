import { useUserStore } from 'stores';
import { Container } from './Menu.styled';
import { MenuItems, ThemeSwitch, UserInfo } from './elements';
import { MenuProps } from './Menu.types';

export const Menu = ({ items }: MenuProps) => {
  const { name, email } = useUserStore();

  return (
    <Container>
      <UserInfo name={name} email={email} />
      <MenuItems items={items} />
      <ThemeSwitch />
    </Container>
  );
};
