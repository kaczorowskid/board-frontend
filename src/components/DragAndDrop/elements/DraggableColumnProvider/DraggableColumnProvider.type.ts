import { Column, Ticket } from 'components/DragAndDrop/types';
import { ReactNode } from 'react';

export interface DraggableColumnProps {
  setBoardId: React.Dispatch<React.SetStateAction<string>>;
  setColumnId: React.Dispatch<React.SetStateAction<string>>;
  removeColumn: (id: string) => void;
  columnsData: Column[];
  boardId: string;
  children: (tickets: Ticket[]) => ReactNode;
}
