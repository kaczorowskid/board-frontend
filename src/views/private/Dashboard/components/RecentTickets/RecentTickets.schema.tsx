import { ColumnsType } from 'antd/es/table';
import { Tag } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

export const columns: ColumnsType<any> = [
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
    dataIndex: 'updated',
    key: 'updated'
  }
];
