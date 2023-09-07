import styled from 'styled-components';

export const DroppableColumn = styled.div<{ isDraggingOver: boolean }>`
  border-radius: 10px;
  background-color: white;
  border: ${({ isDraggingOver }) => (isDraggingOver ? '5px dotted red' : '')};
  width: 350px;
  padding: 20px 10px;
`;

export const ColumnInfo = styled.div`
  height: 60px;
  border-radius: 10px;
  background-color: #ebecf0;
  padding: 20px 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #c6c6c6;
  }
`;

export const AddColumn = styled.div`
  height: 60px;
  border-radius: 10px;
  width: 350px;
  background-color: #ebecf0;
  margin-top: 20px;
  padding: 20px 10px;
  font-weight: bold;

  &:hover {
    background-color: #c6c6c6;
  }
`;

export const AddTicket = styled.div`
  height: 60px;
  border-radius: 10px;
  background-color: #ebecf0;
  margin-top: 20px;
  padding: 20px 10px;
  font-weight: bold;

  &:hover {
    background-color: #c6c6c6;
  }
`;
