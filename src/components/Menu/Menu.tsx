import { useUserStore } from 'stores';
import { Container } from './Menu.styled';
import { MenuItems, ThemeSwitch, UserInfo } from './elements';
import { useLogout, useMenuItems } from './hooks';

export const Menu = () => {
  const { name, email } = useUserStore();
  const { mutateAsync: logout } = useLogout();
  const items = useMenuItems(() => logout({}));

  return (
    <Container>
      <UserInfo name={name} email={email} />
      <MenuItems items={items} />
      <ThemeSwitch />
    </Container>
  );
};
