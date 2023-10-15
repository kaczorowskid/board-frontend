import {
  Board as BoardType,
  Column,
  DragAndDrop,
  PageWrapper
} from 'components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
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

  const ticketDropdownItems = useTicketItems(setEditTicket, removeTicket);

  const columnDropdownItems = useColumnItems(
    setEditColumn,
    removeColumn,
    setCreateTicket
  );

  const handleDragEnd = (mappedColumn: Column[]) => {
    if (data) {
      updateBoard({
        ...data,
        columns: mappedColumn
      });
    }
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
    <PageWrapper
      title='Board'
      buttonName='Add column'
      buttonClick={() => setCreateColumn(id as string)}
    >
      <DragAndDrop
        dataSource={(data as BoardType) || []}
        ticketDropdownItems={ticketDropdownItems}
        ticketDropdownIcon={<EditOutlined />}
        columnDropdownItems={columnDropdownItems}
        columnDropdownIcon={<EditOutlined />}
        onDragEnd={handleDragEnd}
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
    </PageWrapper>
  );
};
