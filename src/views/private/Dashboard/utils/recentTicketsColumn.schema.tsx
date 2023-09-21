import { MessageOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const recentTicketsColumn: ColumnsType<any> = [
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true
  },
  {
    title: 'Prio',
    dataIndex: 'prio',
    key: 'prio',
    render: (data) => <Tag color='green'>{data}</Tag>
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
    key: 'comments',
    render: (data) => (
      <>
        <MessageOutlined />
        <span style={{ marginLeft: '10px' }}>{data}</span>
      </>
    )
  },
  {
    title: 'Updated',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (data) => {
      const date = new Date(data);

      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return [day, month, year].join('-');
    }
  }
];
