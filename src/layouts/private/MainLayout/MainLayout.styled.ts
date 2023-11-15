import styled, { css } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'menu main'
    'menu main';
  grid-template-rows: 100px auto;
  grid-template-columns: 300px auto;
  width: 100vw;
  height: 100vh;
`;

export const MenuContainer = styled.div`
  grid-area: menu;
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    grid-area: main;
    padding: ${spacing.large} ${spacing.huge} 0px ${spacing.huge};
  `}
`;
