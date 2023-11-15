import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
    border: 1px solid ${theme.components.dropdown.border};
    border-radius: ${theme.borderRadius.smaller};

    &:hover {
      background-color: ${theme.components.dropdown.hover};
    }
  `}
`;
