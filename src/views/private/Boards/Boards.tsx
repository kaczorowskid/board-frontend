import { Modal, Table } from 'antd';
import { defaultConfig, useListQuery, usePaginationHelpers } from 'hooks';
import { PageWrapper, TileItem } from 'components';
import { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { routesUrls } from 'routes';
import { ExclamationCircleFilled, TableOutlined } from '@ant-design/icons';
import { BoardsForm, ShareBoardForm } from './components';
import {
  useColumns,
  useCreateShareToken,
  useFetchBoards,
  useRemoveBoard
} from './hooks';

export const Boards = () => {
  const navigate = useNavigate();

  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  const [modal, contextHolder] = Modal.useModal();
  const [boardId, setBoardId] = useState<string>('');
  const { mutateAsync: removeBoard } = useRemoveBoard();
  const { data, mutate: createToken } = useCreateShareToken();

  const { listQuery, setListQuery } = useListQuery({
    ...defaultConfig,
    pagination: {
      ...defaultConfig.pagination,
      pageSize: 10
    }
  });

  const { onHandleTableChange, onSearchPagination } = usePaginationHelpers(
    listQuery,
    setListQuery
  );

  const { data: boardsData, isFetching } = useFetchBoards(listQuery);

  const handleEdit = (id: string) => {
    setBoardId(id);
    setIsSidebarVisible(true);
  };

  const handleOpenBoard = (id: string) => {
    navigate(generatePath(routesUrls.app.board, { id }));
  };

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false);
    setBoardId('');
  };

  const handleShareBoard = (id: string) => {
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
        title: 'Share token',
        content: data?.result,
        icon: <ExclamationCircleFilled />
      });
    }
  }, [data]);

  return (
    <PageWrapper
      title='Boards'
      placeholder='Search'
      icon={<TableOutlined />}
      onSearch={onSearchPagination}
      hasSearchbar
    >
      <TileItem
        buttonName='Add board'
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
