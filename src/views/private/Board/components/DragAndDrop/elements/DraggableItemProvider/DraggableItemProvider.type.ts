import { ReactElement } from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Ticket } from '../../types';

export interface DraggableItemProps {
  columnItems: Ticket[];
  children: (
    columnItem: Ticket,
    isDragging: DraggableStateSnapshot['isDragging'],
    ref: DraggableProvided['innerRef'],
    props:
      | DraggableProvided['draggableProps']
      | DraggableProvided['dragHandleProps']
  ) => ReactElement;
}
