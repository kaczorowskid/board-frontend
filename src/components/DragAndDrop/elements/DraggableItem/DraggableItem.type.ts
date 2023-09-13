import { MenuProps } from 'antd';
import { Ticket } from 'components/DragAndDrop/types';

export interface DraggableItemProps {
  columnItem: Ticket;
  isDragging: boolean;
  openItem?: React.Dispatch<React.SetStateAction<string>>;
  ticketDropdownItems: (id: string) => MenuProps['items'];
  ticketDropdownIcon: JSX.Element;
}
