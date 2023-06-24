import { ColumnItem } from 'components/DragAndDrop/types';

export interface DraggableItemProps {
  columnItem: ColumnItem;
  isDragging: boolean;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
}
