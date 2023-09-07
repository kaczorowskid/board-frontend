import { Input, Table } from 'antd';
import { defaultConfig, useListQuery, usePaginationHelpers } from 'hooks';
import { TileItem } from 'components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { columns } from './schema';
import { BoardsForm } from './components';
import { useFetchBoards } from './hooks';

const { Search } = Input;

export const Boards = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const navigate = useNavigate();

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
          onChange={onHandleTableChange}
          pagination={{
            disabled: isFetching,
            total: boardsData?.count,
            current: listQuery.pagination.current,
            pageSize: listQuery.pagination.pageSize,
            showSizeChanger: false
          }}
          onRow={(row) => ({
            onClick: () => navigate(`/board/${row.id}`)
          })}
        />
      </TileItem>
      <BoardsForm
        isSidebarVisible={isSidebarVisible}
        onCloseSidebar={() => setIsSidebarVisible(false)}
      />
    </>
  );
};
