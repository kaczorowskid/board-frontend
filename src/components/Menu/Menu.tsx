import { useUserStore } from 'stores';
import { Container } from './Menu.styled';
import { UserInfo } from './elements';

export const Menu = () => {
  const { name, email } = useUserStore();

  return (
    <Container>
      <UserInfo name={name} email={email} />
    </Container>
  );
};
