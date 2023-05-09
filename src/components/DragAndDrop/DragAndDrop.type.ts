import { OnDragEndResponder } from 'react-beautiful-dnd';
import { Column } from './types';

export interface DragAndDropProps {
  onDragEnd: OnDragEndResponder;
  draggableData: Column[];
  openItem?: React.Dispatch<React.SetStateAction<string>>;
}
