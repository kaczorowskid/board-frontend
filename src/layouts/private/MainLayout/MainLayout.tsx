import { Outlet } from 'react-router-dom';
import { Menu } from 'components';
import { useAuthorization } from 'hooks';
import {
  GridContainer,
  MenuContainer,
  MainContainer
} from './MainLayout.styled';

export const MainLayout = () => {
  useAuthorization();

  return (
    <GridContainer>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </GridContainer>
  );
};
