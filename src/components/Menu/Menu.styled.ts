import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    padding: ${theme.spacing.semiNormal};
    background-color: ${theme.components.menu.background};
  `}
`;
