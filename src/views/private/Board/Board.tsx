import { useState } from 'react';
import {
  Board as BoardType,
  Column,
  DragAndDrop,
  PageWrapper
} from 'components';
import { useParams } from 'react-router-dom';
import { TableOutlined } from '@ant-design/icons';
import { useCustomSearchParams } from 'hooks';
import { useTranslation } from 'react-i18next';
import {
  useColumnItems,
  useControlView,
  useGetBoard,
  useRemoveColumn,
  useRemoveTicket,
  useTicketItems,
  useUpdateBoard
} from './hooks';
import { AddColumnForm, AddTicketForm, Filter } from './components';
import { SearchParams } from './Board.type';

export const Board = () => {
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
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

  const {
    handleHideSideboard,
    handleAddColumn,
    handleSearchByText,
    handleSearchByPrio,
    handleOpenFilter,
    handleCloseFilter
  } = useControlView({
    params,
    setParams,
    deleteParams,
    setIsOpenFilter
  });

  const handleDragEnd = (mappedColumn: Column[]) => {
    if (data) {
      updateBoard({
        ...data,
        columns: mappedColumn
      });
    }
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
        openFilter={handleOpenFilter}
      />
      <Filter
        isSidebarVisible={isOpenFilter}
        onCloseSidebar={handleCloseFilter}
        onSearch={handleSearchByText}
        onChangePrios={handleSearchByPrio}
      />
      <AddColumnForm
        isSidebarVisible={params.target === 'column'}
        onCloseSidebar={handleHideSideboard}
      />
      <AddTicketForm
        isSidebarVisible={params.target === 'ticket'}
        onCloseSidebar={handleHideSideboard}
      />
    </PageWrapper>
  );
};
