import { Draggable } from 'react-beautiful-dnd';
import { DraggableItemProps } from './DraggableItemProvider.type';

export const DraggableItemProvider = ({
  columnItems,
  children
}: DraggableItemProps) => (
  <>
    {columnItems.map((columnItem, index) => (
      <Draggable key={columnItem.id} draggableId={columnItem.id} index={index}>
        {(provided, snapshot) =>
          children(columnItem, snapshot.isDragging, provided.innerRef, {
            ...provided.dragHandleProps,
            ...provided.draggableProps
          })
        }
      </Draggable>
    ))}
  </>
);
