import { MenuProps } from 'antd';
import { Board, Column } from './types';

export interface DragAndDropProps {
  onDragEnd: (data: Column[]) => void;
  dataSource: Board;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
  ticketDropdownItems: (id: string) => MenuProps['items'];
  columnDropdownItems: (id: string) => MenuProps['items'];
}
