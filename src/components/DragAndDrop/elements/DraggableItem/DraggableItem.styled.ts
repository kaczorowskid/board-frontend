import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.smallest} ${theme.spacing.small};
    margin-top: ${theme.spacing.smallest};
    background-color: ${theme.components.dragAndDrop.items.background};
    border: 2px solid ${theme.components.dragAndDrop.items.border};
    border-radius: ${theme.borderRadius.smaller};
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.semiLarge};
    font-weight: bold;
    color: ${theme.components.dragAndDrop.items.font};
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacing.small};
    color: ${theme.components.dragAndDrop.items.font};
  `}
`;

export const DatePrioContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacing.small};
    font-size: ${theme.fontSize.small};
  `}
`;
