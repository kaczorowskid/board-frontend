import { useEffect, useState } from 'react';
import * as DND from 'react-beautiful-dnd';

const StrictModeDroppable = ({ children, ...props }: DND.DroppableProps) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return <DND.Droppable {...props}>{children}</DND.Droppable>;
};

export { StrictModeDroppable, DND };
