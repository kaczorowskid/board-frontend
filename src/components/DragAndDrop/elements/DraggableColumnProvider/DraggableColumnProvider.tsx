import { Droppable } from 'react-beautiful-dnd';
import { Dropdown } from 'antd';
import { ColumnInfo, DroppableColumn } from './DraggableColumnProvider.styled';
import { DraggableColumnProps } from './DraggableColumnProvider.type';

export const DraggableColumnProvider = ({
  columnsData,
  children,
  columnDropdownItems,
  columnDropdownIcon
}: DraggableColumnProps) => (
  <>
    {columnsData.map(({ tickets, title, id }) => (
      <Droppable key={id} droppableId={id}>
        {(provided, snapshot) => (
          <>
            <DroppableColumn
              draggable
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              <ColumnInfo>
                <span>
                  {title} - {tickets.length}
                </span>
                <Dropdown
                  menu={{ items: columnDropdownItems(id) }}
                  trigger={['click']}
                >
                  {columnDropdownIcon}
                </Dropdown>
              </ColumnInfo>
              {children(tickets)}
              {provided.placeholder}
            </DroppableColumn>
          </>
        )}
      </Droppable>
    ))}
  </>
);
