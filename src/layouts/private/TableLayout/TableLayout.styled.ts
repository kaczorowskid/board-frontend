import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 300px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'navbar navbar'
    'sidebar table';
`;

export const NavbarContainer = styled.div`
  grid-area: navbar;
`;

export const SidebarContainer = styled.div`
  grid-area: sidebar;
`;

export const TableContainer = styled.div`
  grid-area: table;
`;
