import { Outlet } from 'react-router-dom';
import { Menu } from 'components';
import { useAuthorization } from 'hooks';
import { GridContainer, NavbarContainer, SidebarContainer, TableContainer } from './TableLayout.styled';

export const TableLayout = () => {
  useAuthorization();

  return (
    <GridContainer>
      <NavbarContainer></NavbarContainer>
      <SidebarContainer>
        <Menu />
      </SidebarContainer>
      <TableContainer>
        <Outlet />
      </TableContainer>
    </GridContainer>
  );
};
