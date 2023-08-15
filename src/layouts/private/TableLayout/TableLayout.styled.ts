import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 300px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'sidebar table'
    'sidebar table';
`;

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-area: sidebar;
`;

export const TableContainer = styled.div`
  grid-area: table;
`;
