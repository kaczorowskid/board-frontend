import { MenuProps } from 'antd';
import { ReactNode } from 'react';
import { Column, Ticket } from '../../types';

export interface DraggableColumnProps {
  columnsData: Column[];
  boardId: string;
  children: (tickets: Ticket[]) => ReactNode;
  columnDropdownItems: (id: string) => MenuProps['items'];
  openFilter: () => void;
}
