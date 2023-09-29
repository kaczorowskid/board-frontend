import { Outlet } from 'react-router-dom';
import { Menu, PrivateWrapper } from 'components';
import { menuItems } from 'utils';
import {
  GridContainer,
  MenuContainer,
  MainContainer
} from './MainLayout.styled';

export const MainLayout = () => (
  <PrivateWrapper>
    <GridContainer>
      <MenuContainer>
        <Menu items={menuItems} />
      </MenuContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </GridContainer>
  </PrivateWrapper>
);
