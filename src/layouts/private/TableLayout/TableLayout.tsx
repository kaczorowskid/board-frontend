import { Outlet } from 'react-router-dom';
import { GridContainer, NavbarContainer, SidebarContainer, TableContainer } from './TableLayout.styled';

export const TableLayout = () => (
  <GridContainer>
    <NavbarContainer></NavbarContainer>
    <SidebarContainer></SidebarContainer>
    <TableContainer>
      <Outlet />
    </TableContainer>
  </GridContainer>
);
