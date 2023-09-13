import { MenuProps } from 'antd';
import { Column, Ticket } from 'components/DragAndDrop/types';
import { ReactNode } from 'react';

export interface DraggableColumnProps {
  setCreateColumn: React.Dispatch<React.SetStateAction<string>>;
  columnsData: Column[];
  boardId: string;
  children: (tickets: Ticket[]) => ReactNode;
  columnDropdownItems: (id: string) => MenuProps['items'];
  columnDropdownIcon: JSX.Element;
}
