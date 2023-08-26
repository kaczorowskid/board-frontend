import { Input, Table } from 'antd';
import { defaultConfig, useListQuery, usePaginationHelpers } from 'hooks';
import { TileItem } from 'components';
import { useState } from 'react';
import { useFetchTables } from './hooks';
import { columns } from './schema';
import { TablesForm } from './components';

const { Search } = Input;

export const Tables = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

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

  const { data: tablesData, isFetching } = useFetchTables(listQuery);

  return (
    <>
      <Search placeholder='Search' onSearch={onSearchPagination} />
      <TileItem
        title='Tables'
        buttonName='Add table'
        onClick={() => setIsSidebarVisible(true)}
      >
        <Table
          dataSource={tablesData?.data}
          columns={columns}
          onChange={onHandleTableChange}
          pagination={{
            disabled: isFetching,
            total: tablesData?.count,
            current: listQuery.pagination.current,
            pageSize: listQuery.pagination.pageSize,
            showSizeChanger: false
          }}
        />
      </TileItem>
      <TablesForm
        isSidebarVisible={isSidebarVisible}
        onCloseSidebar={() => setIsSidebarVisible(false)}
        onSave={() => setIsSidebarVisible(false)}
      />
    </>
  );
};
