import styled from 'styled-components';

export const DragDropContainer = styled.div`
  display: flex;
  gap: 10px;
  min-height: calc(100vh - 200px);
  padding: 30px;

  background-color: ${({ theme }) => theme.components.dragAndDrop.background};

  border-radius: 30px;
`;

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  width: 280px;
  padding: 20px 10px;
  border-radius: 10px;
`;
