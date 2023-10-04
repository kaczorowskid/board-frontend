import { MenuProps } from 'antd';
import { Board, Column } from './types';

export interface DragAndDropProps {
  onDragEnd: (data: Column[]) => void;
  dataSource: Board;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  ticketDropdownItems: (id: string) => MenuProps['items'];
  ticketDropdownIcon: JSX.Element;
  columnDropdownItems: (id: string) => MenuProps['items'];
  columnDropdownIcon: JSX.Element;
}
