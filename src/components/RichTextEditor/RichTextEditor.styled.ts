import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    min-width: 100%;
    min-height: 50px;
    padding-left: ${theme.spacing.smaller};
    border: 2px solid gray;
    border-radius: ${theme.borderRadius.smaller};
  `}
`;
