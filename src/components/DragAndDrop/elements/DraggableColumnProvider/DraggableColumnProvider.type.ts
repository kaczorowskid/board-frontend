import { Column, ColumnItem } from 'components/DragAndDrop/types';
import { ReactNode } from 'react';

export interface DraggableColumnProps {
  columnsData: Column[];
  children: (columnItems: ColumnItem[]) => ReactNode;
}
