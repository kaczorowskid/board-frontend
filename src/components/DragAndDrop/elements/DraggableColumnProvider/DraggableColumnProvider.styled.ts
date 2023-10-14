import styled from 'styled-components';

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background.tile};
  border: ${({ isDraggingOver, theme }) =>
    isDraggingOver ? `5px dotted ${theme.colors.border.boardColumn}` : ''};
  width: 350px;
  padding: 20px 10px;
`;

export const ColumnInfo = styled.div`
  height: 60px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.border.boardColumn};
  background-color: ${({ theme }) => theme.colors.background.tile};
  padding: 20px 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.font.base};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.base};
  }
`;
