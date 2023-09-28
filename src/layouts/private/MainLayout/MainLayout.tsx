import { Outlet } from 'react-router-dom';
import { Menu } from 'components';
import { menuItems } from 'utils';
import {
  GridContainer,
  MenuContainer,
  MainContainer
} from './MainLayout.styled';

export const MainLayout = () => (
  <GridContainer>
    <MenuContainer>
      <Menu items={menuItems} />
    </MenuContainer>
    <MainContainer>
      <Outlet />
    </MainContainer>
  </GridContainer>
);
