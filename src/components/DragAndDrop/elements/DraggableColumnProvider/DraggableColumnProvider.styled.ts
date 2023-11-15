import styled, { css } from 'styled-components';

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  ${({ isDraggingOver, theme }) => css`
    width: 350px;
    padding: ${theme.spacing.semiNormal} ${theme.spacing.smallest};
    background-color: ${theme.components.dragAndDrop.items.background};
    border: ${isDraggingOver
      ? `5px dotted ${theme.components.dragAndDrop.items.border}`
      : ''};
    border-radius: ${theme.borderRadius.smaller};
  `}
`;

export const ColumnInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0px ${theme.spacing.smallest};
    font-weight: bold;
    color: ${theme.components.dragAndDrop.items.font};
    background-color: ${theme.components.dragAndDrop.items.background};
    border: 2px solid ${theme.components.dragAndDrop.items.border};
    border-radius: ${theme.borderRadius.smaller};
  `}
`;

export const FilterComponent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    margin-top: ${theme.spacing.semiNormal};
    padding: 0px ${theme.spacing.smallest};
    font-weight: bold;
    color: ${theme.components.dragAndDrop.items.font};
    background-color: ${theme.components.dragAndDrop.items.background};
    border: 2px solid ${theme.components.dragAndDrop.items.border};
    border-radius: ${theme.borderRadius.smaller};
  `}
`;
