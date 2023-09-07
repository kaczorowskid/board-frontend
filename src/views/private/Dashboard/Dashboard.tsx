import { useListQuery, usePaginationHelpers } from 'hooks';
import { Input, Select, Table } from 'antd';
import { useState } from 'react';
import { Option } from 'antd/es/mentions';
import { TileItem } from 'components';
import { Filter, useFetchFolders, useFetchTables, useFilterBy } from './hooks';
import { columns } from './utils';
import { Folder, FolderForm } from './components';

const { Search } = Input;

export const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  const [searchBy, setSearchBy] = useState<string>(Filter.FOLDERS);
  const [folderId, setFolderId] = useState<string>('');

  const { listQuery, setListQuery } = useListQuery();
  const { onChangePagination, onHandleTableChange, onSearchPagination } =
    usePaginationHelpers(listQuery, setListQuery);

  const { filterByFolders, filterByTables } = useFilterBy(searchBy);

  const { data: tablesData, isFetching: isFetchingTables } = useFetchTables(
    listQuery,
    folderId,
    filterByTables
  );
  const { data: foldersData } = useFetchFolders(listQuery, filterByFolders);

  const handleOptionChange = (value: string) => setSearchBy(value);

  const addonAfter = (
    <Select defaultValue={searchBy} onChange={handleOptionChange}>
      <Option value={Filter.FOLDERS}>Folders</Option>
      <Option value={Filter.TABLES}>Tables</Option>
    </Select>
  );

  return (
    <>
      <Search
        addonBefore={addonAfter}
        placeholder='Search'
        onSearch={onSearchPagination}
      />
      <TileItem
        title='Folders'
        pagination
        buttonName='add foler'
        buttonProps={{ onClick: () => setIsSidebarVisible(true) }}
      >
        <Folder data={foldersData?.data} setFolderId={setFolderId} />
      </TileItem>
      <TileItem
        title='Tables'
        hasBorder
        buttonName='Add table'
        onChangePagination={onChangePagination}
      >
        <Table
          dataSource={tablesData?.data}
          columns={columns}
          onChange={onHandleTableChange}
          rowKey={(key) => key.id}
          pagination={{
            disabled: isFetchingTables,
            total: tablesData?.count,
            current: listQuery.pagination.current,
            pageSize: listQuery.pagination.pageSize,
            showSizeChanger: false
          }}
        />
      </TileItem>
      <FolderForm
        isSidebarVisible={isSidebarVisible}
        onCloseSidebar={() => setIsSidebarVisible(false)}
      />
    </>
  );
};
