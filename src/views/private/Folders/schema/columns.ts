import { ColumnsType } from 'antd/es/table';
import { GetFoldersWithPaginationResponse } from 'api';

export const columns: ColumnsType<GetFoldersWithPaginationResponse['data'][0]> =
  [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '25%'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '75%',
      sorter: true
    }
  ];
