import { PageWrapper } from 'components';
import { useParams } from 'react-router-dom';
import { TableOutlined } from '@ant-design/icons';
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
import {
  Board as BoardType,
  AddColumnForm,
  AddTicketForm,
  Column,
  DragAndDrop,
  Filter
} from './components';

export const Board = (): JSX.Element => {
  const { boardId } = useParams<{ boardId: string }>();

  const { t } = useTranslation();
  const { data } = useGetBoard(boardId as string);
  const { mutateAsync: updateBoard } = useUpdateBoard();
  const { mutateAsync: removeColumn } = useRemoveColumn();
  const { mutateAsync: removeTicket } = useRemoveTicket();

  const {
    params,
    isOpenFilter,
    setParams,
    handleHideSideboard,
    handleAddColumn,
    handleSearchByText,
    handleSearchByPrio,
    handleOpenFilter,
    handleCloseFilter
  } = useControlView();

  const ticketDropdownItems = useTicketItems(setParams, removeTicket);
  const columnDropdownItems = useColumnItems(setParams, removeColumn);

  const handleDragEnd = (mappedColumn: Column[]): void => {
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
