import styled from 'styled-components';

export const DragDropContainer = styled.div`
  display: flex;
  gap: 10px;

  background-color: ${({ theme }) => theme.colors.background.tile};
  min-height: calc(100vh - 200px);
  padding: 30px;

  border-radius: 30px;
`;

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  border-radius: 10px;
  width: 280px;
  padding: 20px 10px;
`;
