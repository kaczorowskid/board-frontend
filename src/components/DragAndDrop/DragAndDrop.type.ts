import { MenuProps } from 'antd';
import { Board, Column, Prio } from './types';

export type Filter = 'title' | 'prio';

export interface DragAndDropProps {
  onDragEnd: (data: Column[]) => void;
  dataSource: Board;
  filterPrios: Prio;
  filterValue: string;
  openFilter: () => void;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
  ticketDropdownItems: (id: string) => MenuProps['items'];
  columnDropdownItems: (id: string) => MenuProps['items'];
}
