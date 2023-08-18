import { Input, Table } from 'antd';
import { useListQuery, usePaginationHelpers } from 'hooks';
import { TileItem } from 'components';
import { useFetchTables } from './hooks';
import { columns } from './schema';

const { Search } = Input;

export const Tables = () => {
  const { listQuery, setListQuery } = useListQuery();
  const { onHandleTableChange, onSearchPagination } = usePaginationHelpers(listQuery, setListQuery);

  const { data: tablesData, isFetching } = useFetchTables(listQuery);

  return (
    <>
      <Search placeholder='Search' onSearch={onSearchPagination} />
      <TileItem title='Tables' buttonName='Add table'>
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
    </>
  );
};
