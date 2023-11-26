import { Table } from 'antd';
import { columns } from './RecentTickets.schema';
import { RecentTicketsProps } from './RecentTickets.types';

export const RecentTickets = <T extends any>({
  data
}: RecentTicketsProps<T>): JSX.Element => (
  <Table
    dataSource={data}
    columns={columns}
    rowKey={(key) => key.id}
    pagination={false}
    showHeader={false}
    style={{ fontWeight: 'bold' }}
  />
);
