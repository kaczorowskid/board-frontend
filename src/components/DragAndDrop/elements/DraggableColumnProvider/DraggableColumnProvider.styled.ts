import styled from 'styled-components';

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  border-radius: 10px;
  background-color: white;
  /* background: ${({ isDraggingOver }) =>
    isDraggingOver ? '#c8e9b8' : '#ebecf0'}; */
  width: 350px;
  padding: 20px 10px;
`;

export const ColumnName = styled.div`
  border-radius: 10px;
  background-color: #ebecf0;
  padding: 10px 10px;
  font-weight: bold;
`;
