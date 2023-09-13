import { Input, Table } from 'antd';
import { defaultConfig, useListQuery, usePaginationHelpers } from 'hooks';
import { TileItem } from 'components';
import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { routesUrls } from 'utils';
import { BoardsForm } from './components';
import { useColumns, useFetchBoards, useRemoveBoard } from './hooks';

const { Search } = Input;

export const Boards = () => {
  const navigate = useNavigate();

  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [boardId, setBoardId] = useState<string>('');
  const { mutateAsync: removeBoard } = useRemoveBoard();

  const handleEdit = (id: string) => {
    setBoardId(id);
    setIsSidebarVisible(true);
  };

  const handleDelete = (id: string) => {
    removeBoard({ id });
  };

  const handleOpenBoard = (id: string) => {
    navigate(generatePath(routesUrls.app.board, { id }));
  };

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false);
    setBoardId('');
  };

  const columns = useColumns(handleEdit, handleDelete, handleOpenBoard);

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

  return (
    <>
      <Search placeholder='Search' onSearch={onSearchPagination} />
      <TileItem
        title='Boards'
        buttonName='Add board'
        onClick={() => setIsSidebarVisible(true)}
      >
        <Table
          dataSource={boardsData?.data}
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
    </>
  );
};
