import { TableProps } from 'antd';

export interface RecentTicketsProps<T> {
  data: TableProps<T>['dataSource'];
}
