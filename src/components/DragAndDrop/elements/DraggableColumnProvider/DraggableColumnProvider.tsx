import { Droppable } from 'react-beautiful-dnd';
import { DroppableColumn } from './DraggableColumnProvider.styled';
import { DraggableColumnProps } from './DraggableColumnProvider.type';

export const DraggableColumnProvider = ({
  columnsData,
  children
}: DraggableColumnProps) => (
  <>
    {columnsData.map(({ columnItems, columnName, columnId }) => (
      <Droppable key={columnId} droppableId={columnId}>
        {(provided, snapshot) => (
          <DroppableColumn
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            <h1>{columnName}</h1>
            {children(columnItems)}
            {provided.placeholder}
          </DroppableColumn>
        )}
      </Droppable>
    ))}
  </>
);
