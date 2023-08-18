import { ColumnsType } from 'antd/es/table';
import { GetTablesWithPaginationResponse } from 'api';

export const columns: ColumnsType<GetTablesWithPaginationResponse['data'][0]> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: '25%'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '25%',
    sorter: true
  },
  {
    title: 'Favorite',
    dataIndex: 'favorite',
    key: 'favorite',
    width: '25%'
  },
  {
    title: 'Team',
    dataIndex: 'team',
    key: 'team',
    width: '25%'
  }
];
