import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { DragDropContainer } from './DragAndDrop.styled';
import { DragAndDropProps } from './DragAndDrop.type';
import {
  DraggableColumnProvider,
  DraggableItem,
  DraggableItemProvider
} from './elements';
import { Column } from './types';

export const DragAndDrop = ({
  dataSource,
  onDragEnd,
  openItem,
  isError,
  ticketDropdownItems,
  ticketDropdownIcon,
  columnDropdownItems,
  columnDropdownIcon
}: DragAndDropProps) => {
  const boardId = dataSource.id;

  const reorder = (list: Column[], result: DropResult) => {
    const { source, destination } = result;
    const resultList = [...list];

    const getColumnIndex = (columnId: string) =>
      resultList.findIndex((column) => column.id === columnId);

    if (!source || !destination) {
      return { list, mappedResult: resultList };
    }

    const { index: sourceIndex, droppableId: sourceDroppableId } = source;
    const { index: destIndex, droppableId: destDroppableId } = destination;

    const sourceColumnIndex = getColumnIndex(sourceDroppableId);
    const destColumnIndex = getColumnIndex(destDroppableId);

    resultList[destColumnIndex].tickets.splice(
      destIndex,
      0,
      ...resultList[sourceColumnIndex].tickets.splice(sourceIndex, 1)
    );

    const mappedResult = resultList.map((column) => ({
      ...column,
      tickets: column.tickets.map((ticket, index) => ({
        ...ticket,
        order: index + 1,
        column_id: column.id
      }))
    }));

    return { list, mappedResult };
  };

  const handleOnDragEnd = (result: DropResult) => {
    const { list, mappedResult } = reorder(dataSource.columns, result);

    onDragEnd(mappedResult);
    // setData(isError ? list : mappedResult);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <DragDropContainer>
        <DraggableColumnProvider
          columnDropdownItems={columnDropdownItems}
          columnDropdownIcon={columnDropdownIcon}
          columnsData={dataSource.columns || []}
          boardId={boardId}
        >
          {(columnItems) => (
            <DraggableItemProvider columnItems={columnItems}>
              {(columnItem, isDragging, ref, props) => (
                <DraggableItem
                  ticketDropdownIcon={ticketDropdownIcon}
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
