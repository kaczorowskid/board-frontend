import { Board, Column } from './types';

export interface DragAndDropProps {
  onDragEnd: (data: Column[]) => void;
  dataSource: Board;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  setBoardId: React.Dispatch<React.SetStateAction<string>>;
  setColumnId: React.Dispatch<React.SetStateAction<string>>;
  removeColumn: (id: string) => void;
}
