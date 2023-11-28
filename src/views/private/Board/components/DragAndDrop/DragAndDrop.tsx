import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { DragDropContainer } from './DragAndDrop.styled';
import { DragAndDropProps } from './DragAndDrop.type';
import {
  DraggableColumnProvider,
  DraggableItem,
  DraggableItemProvider
} from './elements';
import { useReorder } from './hooks';
import { DropdownProvider } from './contexts';

export const DragAndDrop = ({
  dataSource,
  onDragEnd,
  openItem,
  openFilter,
  ticketDropdownItems,
  columnDropdownItems
}: DragAndDropProps): JSX.Element => {
  const boardId = dataSource.id;
  const { columns } = dataSource;
  const { reorder } = useReorder();

  const handleOnDragEnd = (result: DropResult): void => {
    const { mappedResult } = reorder(columns, result);

    onDragEnd(mappedResult);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <DragDropContainer>
        <DropdownProvider value={{ ticketDropdownItems, columnDropdownItems }}>
          <DraggableColumnProvider
            columnsData={columns || []}
            boardId={boardId}
            openFilter={openFilter}
          >
            {(columnItems) => (
              <DraggableItemProvider columnItems={columnItems}>
                {(columnItem, isDragging, ref, props) => (
                  <DraggableItem
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
        </DropdownProvider>
      </DragDropContainer>
    </DragDropContext>
  );
};
