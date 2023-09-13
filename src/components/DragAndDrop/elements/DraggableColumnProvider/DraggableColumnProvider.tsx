import { Droppable } from 'react-beautiful-dnd';
import { Dropdown } from 'antd';
import {
  AddColumn,
  ColumnInfo,
  DroppableColumn
} from './DraggableColumnProvider.styled';
import { DraggableColumnProps } from './DraggableColumnProvider.type';

export const DraggableColumnProvider = ({
  setCreateColumn,
  columnsData,
  boardId,
  children,
  columnDropdownItems,
  columnDropdownIcon
}: DraggableColumnProps) => (
  <>
    <AddColumn onClick={() => setCreateColumn(boardId)}>
      {columnDropdownIcon}
    </AddColumn>
    {columnsData.map(({ tickets, title, id }) => (
      <Droppable key={id} droppableId={id}>
        {(provided, snapshot) => (
          <>
            <DroppableColumn
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              <ColumnInfo>
                <span>{title}</span>
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
