import { Folder, TileItem } from 'components';
import { useListQuery, usePaginationHelpers } from 'hooks';
import { Input, Select, Table } from 'antd';
import { useState } from 'react';
import { Option } from 'antd/es/mentions';
import { Container } from './TableChoose.styled';
import { Filter, useFetchFolders, useFetchTables, useFilterBy } from './hooks';
import { columns } from './utils';

const { Search } = Input;

export const TableChoose = () => {
  const [searchBy, setSearchBy] = useState<string>(Filter.FOLDERS);
  const [folderId, setFolderId] = useState<string>('');

  const { listQuery, setListQuery } = useListQuery();
  const { onChangePagination, onSearchPagination } = usePaginationHelpers(listQuery, setListQuery);

  const { filterByFolders, filterByTables } = useFilterBy(searchBy);

  const { data: tablesData } = useFetchTables(listQuery, folderId, filterByTables);
  const { data: folderData } = useFetchFolders(listQuery, filterByFolders);

  const handleOptionChange = (value: string) => setSearchBy(value);

  const addonAfter = (
    <Select defaultValue={searchBy} onChange={handleOptionChange}>
      <Option value={Filter.FOLDERS}>Folders</Option>
      <Option value={Filter.TABLES}>Tables</Option>
    </Select>
  );

  return (
    <Container>
      <Search addonBefore={addonAfter} placeholder='Search' onSearch={onSearchPagination} />
      <TileItem title='Folders' pagination>
        <Folder data={folderData?.data} setFolderId={setFolderId} />
      </TileItem>
      <TileItem title='Tables' hasBorder pagination onChangePagination={onChangePagination}>
        <Table dataSource={tablesData?.data} columns={columns} pagination={false} />
      </TileItem>
    </Container>
  );
};
