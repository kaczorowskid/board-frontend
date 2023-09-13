import { Board as BoardType, Column, DragAndDrop } from 'components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoreOutlined } from '@ant-design/icons';
import {
  useColumnItems,
  useGetBoard,
  useRemoveColumn,
  useRemoveTicket,
  useTicketItems,
  useUpdateBoard
} from './hooks';
import { AddColumnForm, AddTicketForm } from './components';

export const Board = () => {
  const { id } = useParams();

  const [createColumn, setCreateColumn] = useState<string>('');
  const [createTicket, setCreateTicket] = useState<string>('');
  const [editColumn, setEditColumn] = useState<string>('');
  const [editTicket, setEditTicket] = useState<string>('');

  const { data } = useGetBoard(id as string);
  const { mutateAsync: updateBoard, isError } = useUpdateBoard();
  const { mutateAsync: removeColumn } = useRemoveColumn();
  const { mutateAsync: removeTicket } = useRemoveTicket();

  const ticketDropdownItems = useTicketItems(
    (id) => setEditTicket(id),
    (id) => removeTicket({ id })
  );

  const columnDropdownItems = useColumnItems(
    (id) => setEditColumn(id),
    (id) => removeColumn({ id }),
    (id) => setCreateTicket(id)
  );

  const handleDragEnd = (mappedColumn: Column[]) => {
    updateBoard({
      ...(data as BoardType),
      columns: mappedColumn
    });
  };

  const hideColumnSideboard = () => {
    setCreateColumn('');
    setEditColumn('');
  };

  const hideTicketSideboard = () => {
    setCreateTicket('');
    setEditTicket('');
  };

  return (
    <>
      <DragAndDrop
        dataSource={(data as BoardType) || []}
        ticketDropdownItems={ticketDropdownItems}
        ticketDropdownIcon={<MoreOutlined />}
        columnDropdownItems={columnDropdownItems}
        columnDropdownIcon={<MoreOutlined />}
        onDragEnd={handleDragEnd}
        setCreateColumn={setCreateColumn}
        isError={isError}
      />
      <AddColumnForm
        isSidebarVisible={Boolean(createColumn || editColumn)}
        onCloseSidebar={hideColumnSideboard}
        boardId={createColumn}
        columnId={editColumn}
      />
      <AddTicketForm
        isSidebarVisible={Boolean(createTicket || editTicket)}
        onCloseSidebar={hideTicketSideboard}
        columnId={createTicket}
        ticketId={editTicket}
      />
    </>
  );
};
