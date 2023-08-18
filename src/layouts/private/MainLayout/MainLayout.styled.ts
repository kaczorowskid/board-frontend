import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 300px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'menu main'
    'menu main';
`;

export const MenuContainer = styled.div`
  grid-area: menu;
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  grid-area: main;
  padding: 50px 30px 0px 30px;
`;