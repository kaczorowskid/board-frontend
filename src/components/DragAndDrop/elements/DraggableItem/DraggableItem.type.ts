import { ColumnItem } from 'components/DragAndDrop/types';

export interface DraggableItemProps {
  columnItem: ColumnItem;
  epic?: string;
  isDragging: boolean;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
}
