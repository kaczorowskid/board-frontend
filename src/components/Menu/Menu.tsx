import { useUserStore } from 'stores';
import { useNavigate } from 'react-router';
import { routesUrls } from 'routes';
import { Container } from './Menu.styled';
import { MenuItems, UserInfo } from './elements';
import { useLogout, useMenuItems } from './hooks';

export const Menu = () => {
  const navigate = useNavigate();
  const { firstName, lastName, email } = useUserStore();
  const { mutateAsync: logout } = useLogout();
  const items = useMenuItems(() => logout({}));

  return (
    <Container>
      <UserInfo
        onClick={() => navigate(routesUrls.app.user)}
        firstName={firstName}
        lastName={lastName}
        email={email}
      />
      <MenuItems items={items} />
    </Container>
  );
};
