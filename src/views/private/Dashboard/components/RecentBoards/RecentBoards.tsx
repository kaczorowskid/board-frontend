import { Table } from 'antd';
import { columns } from './RecentBoards.schema';
import { RecentBoardsProps } from './RecentBoards.types';

export const RecentBoards = <T extends any>({
  data
}: RecentBoardsProps<T>): JSX.Element => (
  <Table
    dataSource={data}
    columns={columns}
    rowKey={(key) => key.id}
    pagination={false}
    showHeader={false}
    style={{ fontWeight: 'bold' }}
  />
);
