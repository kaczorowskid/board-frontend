import { ColumnsType } from 'antd/es/table';

export const recentBoardsColumn: ColumnsType<any> = [
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
    width: '25%'
  },
  {
    title: 'Updated',
    dataIndex: 'updated',
    key: 'updated',
    width: '25%'
  }
];
