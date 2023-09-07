import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
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
  setBoardId,
  setColumnId,
  removeColumn
}: DragAndDropProps) => {
  const [data, setData] = useState<Column[]>(dataSource.columns);
  const boardId = dataSource.id;

  useEffect(() => {
    setData(dataSource.columns);
  }, [dataSource.columns]);

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
    const { list, mappedResult } = reorder(data, result);

    onDragEnd(mappedResult);
    setData(isError ? list : mappedResult);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <DragDropContainer>
        <DraggableColumnProvider
          setBoardId={setBoardId}
          setColumnId={setColumnId}
          columnsData={data || []}
          removeColumn={removeColumn}
          boardId={boardId}
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
      </DragDropContainer>
    </DragDropContext>
  );
};
