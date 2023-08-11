import { Folder, TileItem } from 'components';
import { useListQuery, usePaginationHelpers } from 'hooks';
import { Table } from 'antd';
import { useState } from 'react';
import { Container } from './TableChoose.styled';
import { useFetchFolders, useFetchTables } from './hooks';
import { columns } from './utils';

export const TableChoose = () => {
  const [folderId, setFolderId] = useState<string>('');

  const { listQuery, setListQuery } = useListQuery();
  const { onChangePagination } = usePaginationHelpers(listQuery, setListQuery);

  const { data: tablesData, isLoading } = useFetchTables(listQuery, folderId);
  const { data: folderData } = useFetchFolders();

  return (
    <Container>
      <TileItem title='My Tables' buttonName='Add Table' hasBigTitle />
      <TileItem title='Folders' pagination>
        <Folder data={folderData || []} setFolderId={setFolderId} />
      </TileItem>
      <TileItem title='Tables' hasBorder pagination onChangePagination={onChangePagination}>
        <Table dataSource={tablesData?.data} columns={columns} pagination={false} loading={isLoading} />
      </TileItem>
    </Container>
  );
};
