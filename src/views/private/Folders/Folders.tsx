import { Input, Table } from 'antd';
import { defaultConfig, useListQuery, usePaginationHelpers } from 'hooks';
import { TileItem } from 'components';
import { useState } from 'react';
import { useFetchFolders } from './hooks';
import { columns } from './schema';
import { FolderForm } from './components';

const { Search } = Input;

export const Folders = () => {
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

  const { data: folderData, isFetching } = useFetchFolders(listQuery);

  return (
    <>
      <Search placeholder='Search' onSearch={onSearchPagination} />
      <TileItem
        hasBigTitle
        title='Folders'
        buttonName='Add folder'
        onClick={() => setIsSidebarVisible(true)}
      >
        <Table
          dataSource={folderData?.data}
          columns={columns}
          onChange={onHandleTableChange}
          pagination={{
            disabled: isFetching,
            total: folderData?.count,
            current: listQuery.pagination.current,
            pageSize: listQuery.pagination.pageSize,
            showSizeChanger: false
          }}
        />
      </TileItem>
      <FolderForm
        isSidebarVisible={isSidebarVisible}
        onCloseSidebar={() => setIsSidebarVisible(false)}
        onSave={() => setIsSidebarVisible(false)}
      />
    </>
  );
};
