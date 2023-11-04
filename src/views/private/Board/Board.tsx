import { useState } from 'react';
import {
  Board as BoardType,
  Column,
  DragAndDrop,
  PageWrapper,
  Prio
} from 'components';
import { useParams } from 'react-router-dom';
import { TableOutlined } from '@ant-design/icons';
import { useCustomSearchParams } from 'hooks';
import { useTranslation } from 'react-i18next';
import {
  useColumnItems,
  useGetBoard,
  useRemoveColumn,
  useRemoveTicket,
  useTicketItems,
  useUpdateBoard
} from './hooks';
import { AddColumnForm, AddTicketForm, Filter } from './components';
import { SearchParams } from './Board.type';

export const Board = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { boardId } = useParams<{ boardId: string }>();

  const { t } = useTranslation();
  const { data } = useGetBoard(boardId as string);
  const { mutateAsync: updateBoard } = useUpdateBoard();
  const { mutateAsync: removeColumn } = useRemoveColumn();
  const { mutateAsync: removeTicket } = useRemoveTicket();

  const { params, setParams, deleteParams } =
    useCustomSearchParams<SearchParams>();

  const ticketDropdownItems = useTicketItems(setParams, removeTicket);
  const columnDropdownItems = useColumnItems(setParams, removeColumn);

  const handleDragEnd = (mappedColumn: Column[]) => {
    if (data) {
      updateBoard({
        ...data,
        columns: mappedColumn
      });
    }
  };

  const hideSideboard = () => {
    deleteParams();
  };

  const handleAddColumn = () => {
    setParams({ target: 'column' });
  };

  const handleSearchByText = (event: any) => {
    setParams({
      ...params,
      text: event.target.value
    });
  };

  const handleSearchByPrio = (prio: any) => {
    setParams({
      ...params,
      prio
    });
  };

  const handleCloseFilter = () => {
    setOpen(false);
  };

  return (
    <PageWrapper
      title={t('private.board.board')}
      buttonName={t('private.board.add-column')}
      icon={<TableOutlined />}
      buttonClick={handleAddColumn}
    >
      <DragAndDrop
        dataSource={(data as BoardType) || []}
        ticketDropdownItems={ticketDropdownItems}
        columnDropdownItems={columnDropdownItems}
        onDragEnd={handleDragEnd}
        openFilter={() => setOpen(true)}
        filterValue={params.text as string}
        filterPrios={params.prio as Prio}
      />
      <Filter
        isSidebarVisible={open}
        onCloseSidebar={handleCloseFilter}
        onSearch={handleSearchByText}
        onChangePrios={handleSearchByPrio}
      />
      <AddColumnForm
        isSidebarVisible={params.target === 'column'}
        onCloseSidebar={hideSideboard}
      />
      <AddTicketForm
        isSidebarVisible={params.target === 'ticket'}
        onCloseSidebar={hideSideboard}
      />
    </PageWrapper>
  );
};
