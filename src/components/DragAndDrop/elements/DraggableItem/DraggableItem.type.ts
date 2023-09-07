import { Ticket } from 'components/DragAndDrop/types';

export interface DraggableItemProps {
  columnItem: Ticket;
  isDragging: boolean;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
}
