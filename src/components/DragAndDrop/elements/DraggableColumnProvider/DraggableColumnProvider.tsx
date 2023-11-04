import { Droppable } from 'react-beautiful-dnd';
import { AntdDropdown } from 'components/antd';
import { EditOutlined, FunnelPlotOutlined } from '@ant-design/icons';
import {
  ColumnInfo,
  DroppableColumn,
  FilterComponent
} from './DraggableColumnProvider.styled';
import { DraggableColumnProps } from './DraggableColumnProvider.type';

export const DraggableColumnProvider = ({
  columnsData,
  children,
  columnDropdownItems,
  openFilter
}: DraggableColumnProps) => (
  <>
    <FilterComponent onClick={openFilter}>
      <FunnelPlotOutlined />
    </FilterComponent>
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
