import styled from 'styled-components';

export const DragDropContainer = styled.div`
  display: flex;
  gap: 10px;

  background-color: white;
  height: calc(100vh - 200px);
  padding: 30px;

  border-radius: 30px;
  border: 3px solid #f2f2f2;
`;

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  border-radius: 10px;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? 'lightblue' : '#ebecf0'};
  width: 280px;
  padding: 20px 10px;
`;
