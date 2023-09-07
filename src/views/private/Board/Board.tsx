import { Board as BoardType, Column, DragAndDrop } from 'components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetBoard, useRemoveColumn, useUpdateBoard } from './hooks';
import { AddColumnForm, AddTicketForm } from './components';

export const Board = () => {
  const { id } = useParams();

  const [boardId, setBoardId] = useState<string>('');
  const [columnId, setColumnId] = useState<string>('');

  const { data } = useGetBoard(id as string);
  const { mutateAsync: updateBoard, isError } = useUpdateBoard();
  const { mutateAsync: removeColumn } = useRemoveColumn();

  const handleDragEnd = (mappedColumn: Column[]) => {
    updateBoard({
      ...(data as BoardType),
      columns: mappedColumn
    });
  };

  const handleRemoveColumn = (id: string) => {
    removeColumn({ id });
  };

  return (
    <>
      <DragAndDrop
        onDragEnd={handleDragEnd}
        isError={isError}
        dataSource={(data as BoardType) || []}
        setBoardId={setBoardId}
        setColumnId={setColumnId}
        removeColumn={handleRemoveColumn}
      />
      <AddColumnForm
        isSidebarVisible={Boolean(boardId)}
        onCloseSidebar={() => setBoardId('')}
        boardId={boardId}
      />
      <AddTicketForm
        isSidebarVisible={Boolean(columnId)}
        onCloseSidebar={() => setColumnId('')}
        columnId={columnId}
      />
    </>
  );
};
