import { Droppable } from 'react-beautiful-dnd';
import { CloseOutlined } from '@ant-design/icons';
import {
  AddColumn,
  DroppableColumn,
  ColumnInfo,
  AddTicket
} from './DraggableColumnProvider.styled';
import { DraggableColumnProps } from './DraggableColumnProvider.type';

export const DraggableColumnProvider = ({
  setBoardId,
  setColumnId,
  removeColumn,
  columnsData,
  boardId,
  children
}: DraggableColumnProps) => (
  <>
    {columnsData.map(({ tickets, title, id }) => (
      <Droppable key={id} droppableId={id}>
        {(provided, snapshot) => (
          <>
            <DroppableColumn
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              <ColumnInfo>
                <span>{title}</span>
                <CloseOutlined onClick={() => removeColumn(id)} />
              </ColumnInfo>
              {children(tickets)}
              {provided.placeholder}
              <AddTicket onClick={() => setColumnId(id)}>Add ticket</AddTicket>
            </DroppableColumn>
          </>
        )}
      </Droppable>
    ))}
    <AddColumn onClick={() => setBoardId(boardId)}>Add column</AddColumn>
  </>
);
