import styled from 'styled-components';

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  width: 350px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.colors.background.tile};
  border: ${({ isDraggingOver, theme }) =>
    isDraggingOver ? `5px dotted ${theme.colors.border.boardColumn}` : ''};
  border-radius: 10px;
`;

export const ColumnInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0px 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font.base};
  background-color: ${({ theme }) => theme.colors.background.tile};
  border: 2px solid ${({ theme }) => theme.colors.border.boardColumn};
  border-radius: 10px;
`;
