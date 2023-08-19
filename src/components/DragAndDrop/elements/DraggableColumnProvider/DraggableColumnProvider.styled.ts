import styled from 'styled-components';

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  border-radius: 10px;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? '#c8e9b8' : '#ebecf0'};
  width: 350px;
  padding: 20px 10px;
`;
