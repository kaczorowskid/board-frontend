import { forwardRef } from 'react';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { AntdItemCard } from 'components/antd';
import { DraggableItemProps } from './DraggableItem.type';
import { Container } from './DraggableItem.styled';

export const DraggableItem = forwardRef<HTMLDivElement, DraggableItemProps>(
  ({ columnItem, isDragging, openItem, ...props }, ref) => (
    <Container ref={ref} {...props}>
      <AntdItemCard
        ticketCode={columnItem.content.code}
        ticketDescription={columnItem.content.name as string}
        epics={columnItem.content.epics as string[]}
        actions={[
          <SettingOutlined onClick={() => openItem?.(columnItem.id)} key='setting' />,
          <EditOutlined key='edit' />
        ]}
      />
    </Container>
  )
);
