import { Modal, Table } from 'antd';
import { PageWrapper, TileItem } from 'components';
import { useEffect } from 'react';
import { ExclamationCircleFilled, TableOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { usePaginationHelpers } from 'hooks/paginationHelper.hook';
import { BoardsForm, ShareBoardForm } from './components';
import {
  useColumns,
  useControlView,
  useCreateShareToken,
  useFetchBoards,
  useRemoveBoard
} from './hooks';

export const Boards = (): JSX.Element => {
  const { t } = useTranslation();

  const [modal, contextHolder] = Modal.useModal();
  const { mutateAsync: removeBoard } = useRemoveBoard();
  const { data, mutate: createToken } = useCreateShareToken();

  const { listQuery, onHandleTableChange, onSearchPagination } =
    usePaginationHelpers();

  const { data: boardsData, isFetching } = useFetchBoards(listQuery);

  const {
    isSidebarVisible,
    boardId,
    setIsSidebarVisible,
    handleEdit,
    handleOpenBoard,
    handleCloseSidebar
  } = useControlView();

  const handleShareBoard = (id: string): void => {
    createToken({ board_id: id });
  };

  const columns = useColumns(
    handleEdit,
    removeBoard,
    handleOpenBoard,
    handleShareBoard
  );

  useEffect(() => {
    if (data) {
      modal.confirm({
        title: t('private.boards.share-token'),
        content: data?.result,
        icon: <ExclamationCircleFilled />
      });
    }
  }, [data]);

  return (
    <PageWrapper
      title={t('private.boards.boards')}
      placeholder={t('common.search')}
      icon={<TableOutlined />}
      onSearch={onSearchPagination}
      hasSearchbar
    >
      <TileItem
        buttonName={t('private.boards.add-board')}
        onClick={() => setIsSidebarVisible(true)}
        additionButtons={<ShareBoardForm />}
      >
        <Table
          dataSource={boardsData?.rows}
          columns={columns}
          rowKey={(row) => row.id}
          onChange={onHandleTableChange}
          pagination={{
            disabled: isFetching,
            total: boardsData?.count,
            current: listQuery.pagination.current,
            pageSize: listQuery.pagination.pageSize,
            showSizeChanger: false
          }}
        />
      </TileItem>
      <BoardsForm
        id={boardId}
        isSidebarVisible={isSidebarVisible}
        onCloseSidebar={handleCloseSidebar}
      />
      {contextHolder}
    </PageWrapper>
  );
};
