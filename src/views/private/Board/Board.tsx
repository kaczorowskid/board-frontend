import { Column, DragAndDrop, ModalOptions, mockData } from 'components';
import { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';

export const Board = () => {
  const [data, setData] = useState<Column[]>(mockData as Column[]);
  const [itemData, setItemData] = useState<string>('');

  const reorder = (list: Column[], result: DropResult) => {
    const resultList = Array.from(list);

    const source = {
      itemIndex: result.source.index,
      columnIndex: resultList.findIndex(
        (column) => column.columnId === result.source.droppableId
      )
    };

    const destination = {
      itemIndex: result.destination?.index,
      columnIndex: resultList.findIndex(
        (column) => column.columnId === result.destination?.droppableId
      )
    };

    const [remove] = resultList[source.columnIndex].columnItems.splice(
      Number(source.itemIndex),
      1
    );
    resultList[destination.columnIndex].columnItems.splice(
      Number(destination.itemIndex),
      0,
      remove
    );

    return { list, resultList };
  };

  const onDragEnd = (result: DropResult) => {
    const { resultList } = reorder(data, result);

    setData(resultList);
  };

  const handleCloseModal = () => {
    setItemData('');
  };

  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        draggableData={data}
        openItem={setItemData}
      />
      <ModalOptions
        isOpen={!!itemData}
        id={itemData}
        modalClose={handleCloseModal}
      />
    </>
  );
};
