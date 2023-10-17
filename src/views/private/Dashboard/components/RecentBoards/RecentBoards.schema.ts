import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

export const columns: ColumnsType<any> = [
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
    width: '60%'
  },
  {
    title: 'Created',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (time) => dayjs(time).format('DD-MM-YYYY HH:mm')
  }
];
