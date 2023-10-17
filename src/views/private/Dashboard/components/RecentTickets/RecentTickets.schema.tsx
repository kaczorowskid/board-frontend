import { ColumnsType } from 'antd/es/table';
import { MessageOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { IconTag } from 'components';

export const columns: ColumnsType<any> = [
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Prio',
    dataIndex: 'prio',
    key: 'prio',
    render: (prio) => <IconTag prio={prio} />
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
    key: 'comments',
    render: (comments) => (
      <>
        <MessageOutlined />
        <span style={{ marginLeft: '10px' }}>{comments.length}</span>
      </>
    )
  },
  {
    title: 'Created',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (time) => dayjs(time).format('DD-MM-YYYY HH:mm')
  }
];
