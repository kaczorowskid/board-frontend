import { Outlet } from 'react-router-dom';
import { Menu } from 'components';
import { useAuthorization } from 'hooks';
import { GridContainer, SidebarContainer, TableContainer } from './MainLayout.styled';

export const MainLayout = () => {
  useAuthorization();

  return (
    <GridContainer>
      <SidebarContainer>
        <Menu />
      </SidebarContainer>
      <TableContainer>
        <Outlet />
      </TableContainer>
    </GridContainer>
  );
};
