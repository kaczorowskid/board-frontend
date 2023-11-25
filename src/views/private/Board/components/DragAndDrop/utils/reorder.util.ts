import { DropResult } from 'react-beautiful-dnd';
import { Column } from '../types';

export const reorder = (list: Column[], result: DropResult) => {
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
