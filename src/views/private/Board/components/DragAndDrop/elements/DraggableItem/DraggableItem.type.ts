import { Ticket } from '../../types';

export interface DraggableItemProps {
  columnItem: Ticket;
  isDragging: boolean;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
}
