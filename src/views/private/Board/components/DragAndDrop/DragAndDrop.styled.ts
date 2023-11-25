import styled, { css } from 'styled-components';

export const DragDropContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 10px;
    min-height: calc(100vh - 200px);
    padding: ${theme.spacing.semiLarge};
    background-color: ${theme.components.dragAndDrop.background};
    border-radius: ${theme.borderRadius.large};
  `}
`;

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  ${({ theme }) => css`
    width: 280px;
    padding: ${theme.spacing.semiNormal} ${theme.spacing.smallest};
    border-radius: ${theme.borderRadius.smaller};
  `}
`;
