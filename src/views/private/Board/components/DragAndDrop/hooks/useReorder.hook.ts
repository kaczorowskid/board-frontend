import { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { Column, Ticket } from '../types';

interface UseReorder {
  reorder: (
    columns: Column[],
    result: DropResult
  ) => {
    mappedResult: Column[];
  };
}

export const useReorder = (): UseReorder => {
  const getColumnIndex = useCallback(
    (columns: Column[], columnId: string) =>
      columns.findIndex((column) => column.id === columnId),
    []
  );

  const reorderTickets = useCallback(
    (
      source: Column,
      destination: Column,
      sourceIndex: number,
      destIndex: number
    ) => {
      const [removed] = source.tickets.splice(sourceIndex, 1);
      destination.tickets.splice(destIndex, 0, removed);
    },
    []
  );

  const mapTicketOrder = useCallback(
    (columns: Column[]) =>
      columns.map((column) => ({
        ...column,
        tickets: column.tickets.map((ticket: Ticket, index: number) => ({
          ...ticket,
          order: index + 1,
          column_id: column.id
        }))
      })),
    []
  );

  const reorder = useCallback(
    (columns: Column[], result: DropResult): { mappedResult: Column[] } => {
      const { source, destination } = result;

      if (!source || !destination) {
        return { mappedResult: columns };
      }

      const { index: sourceIndex, droppableId: sourceDroppableId } = source;
      const { index: destIndex, droppableId: destDroppableId } = destination;

      const sourceColumnIndex = getColumnIndex(columns, sourceDroppableId);
      const destColumnIndex = getColumnIndex(columns, destDroppableId);

      const cloneColumns = [...columns];

      reorderTickets(
        cloneColumns[sourceColumnIndex],
        cloneColumns[destColumnIndex],
        sourceIndex,
        destIndex
      );

      const mappedResult = mapTicketOrder(cloneColumns);

      return { mappedResult };
    },
    [getColumnIndex, reorderTickets, mapTicketOrder]
  );

  return { reorder };
};
