import { Outlet } from 'react-router-dom';
import { Menu, PrivateWrapper } from 'components';

import {
  GridContainer,
  MenuContainer,
  MainContainer
} from './MainLayout.styled';

export const MainLayout = (): JSX.Element => (
  <PrivateWrapper>
    <GridContainer>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </GridContainer>
  </PrivateWrapper>
);
