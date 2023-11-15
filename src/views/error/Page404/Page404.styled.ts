import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-size: ${theme.fontSize.mega};
    color: ${theme.errors.page404.font};
  `}
`;
