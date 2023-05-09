import { DragDropContext } from 'react-beautiful-dnd';
import { DragDropContainer } from './DragAndDrop.styled';
import { DragAndDropProps } from './DragAndDrop.type';
import { DraggableColumnProvider, DraggableItem, DraggableItemProvider } from './elements';

export const DragAndDrop = ({ draggableData, onDragEnd, openItem }: DragAndDropProps) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <DragDropContainer>
      <DraggableColumnProvider columnsData={draggableData}>
        {(columnItems) => (
          <DraggableItemProvider columnItems={columnItems}>
            {(columnItem, isDragging, ref, props) => (
              <DraggableItem columnItem={columnItem} openItem={openItem} isDragging={isDragging} ref={ref} {...props} />
            )}
          </DraggableItemProvider>
        )}
      </DraggableColumnProvider>
    </DragDropContainer>
  </DragDropContext>
);
