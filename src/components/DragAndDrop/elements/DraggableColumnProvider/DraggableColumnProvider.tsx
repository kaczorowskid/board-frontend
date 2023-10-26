import { Droppable } from 'react-beautiful-dnd';
import { AntdDropdown } from 'components/antd';
import { EditOutlined } from '@ant-design/icons';
import { ColumnInfo, DroppableColumn } from './DraggableColumnProvider.styled';
import { DraggableColumnProps } from './DraggableColumnProvider.type';

export const DraggableColumnProvider = ({
  columnsData,
  children,
  columnDropdownItems
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
                <AntdDropdown menu={{ items: columnDropdownItems(id) }}>
                  <EditOutlined />
                </AntdDropdown>
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
