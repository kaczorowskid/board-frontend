import styled from 'styled-components';

export const DragDropContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  border-radius: 10px;
  background: ${({ isDraggingOver }) => (isDraggingOver ? 'lightblue' : '#ebecf0')};
  width: 280px;
  padding: 20px 10px;
`;
