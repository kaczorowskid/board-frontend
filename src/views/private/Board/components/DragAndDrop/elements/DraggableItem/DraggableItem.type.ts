import { MenuProps } from 'antd';
import { Ticket } from '../../types';

export interface DraggableItemProps {
  columnItem: Ticket;
  isDragging: boolean;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
  ticketDropdownItems: (id: string) => MenuProps['items'];
}
