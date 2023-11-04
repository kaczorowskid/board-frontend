import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { DragDropContainer } from './DragAndDrop.styled';
import { DragAndDropProps } from './DragAndDrop.type';
import {
  DraggableColumnProvider,
  DraggableItem,
  DraggableItemProvider
} from './elements';
import { reorder } from './utils';
import { useFilter } from './hooks';

export const DragAndDrop = ({
  dataSource,
  onDragEnd,
  openItem,
  filterPrios,
  filterValue,
  openFilter,
  ticketDropdownItems,
  columnDropdownItems
}: DragAndDropProps) => {
  const boardId = dataSource.id;
  const { columns } = dataSource;

  const filteredColumns = useFilter(columns, filterValue, filterPrios);

  const handleOnDragEnd = (result: DropResult) => {
    const { mappedResult } = reorder(columns, result);

    onDragEnd(mappedResult);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <DragDropContainer>
        <DraggableColumnProvider
          columnDropdownItems={columnDropdownItems}
          columnsData={filteredColumns || []}
          boardId={boardId}
          openFilter={openFilter}
        >
          {(columnItems) => (
            <DraggableItemProvider columnItems={columnItems}>
              {(columnItem, isDragging, ref, props) => (
                <DraggableItem
                  ticketDropdownItems={ticketDropdownItems}
                  columnItem={columnItem}
                  openItem={openItem}
                  isDragging={isDragging}
                  ref={ref}
                  {...props}
                />
              )}
            </DraggableItemProvider>
          )}
        </DraggableColumnProvider>
      </DragDropContainer>
    </DragDropContext>
  );
};
