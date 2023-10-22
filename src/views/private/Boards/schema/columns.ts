import { ColumnsType } from 'antd/es/table';
import { GetBoardsWithPaginationResponse } from 'api';

export const columns: ColumnsType<GetBoardsWithPaginationResponse['rows'][0]> =
  [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '50%'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '50%'
    }
  ];
