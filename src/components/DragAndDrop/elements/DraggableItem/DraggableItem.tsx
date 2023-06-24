import { forwardRef } from 'react';
import { Tag } from 'antd';
import { AntdAvatar } from 'components/antd';
import { DraggableItemProps } from './DraggableItem.type';
import { Container, EpicsContainer, TicketInfo, TicketInfoContainer, Title } from './DraggableItem.styled';

export const DraggableItem = forwardRef<HTMLDivElement, DraggableItemProps>(
  ({ columnItem, isDragging, openItem, ...props }, ref) => {
    const handleOpenItem = () => {
      openItem?.(columnItem.id);
    };

    return (
      <Container ref={ref} onClick={handleOpenItem} {...props}>
        <Title>{columnItem.content.description}</Title>
        <EpicsContainer>
          {columnItem.content.epics?.map((epic) => (
            <Tag key={epic} color='red'>
              {epic}
            </Tag>
          ))}
        </EpicsContainer>
        <TicketInfoContainer>
          <TicketInfo>
            <AntdAvatar size='small' />
          </TicketInfo>
          <TicketInfo>{columnItem.content.code}</TicketInfo>
          <TicketInfo />
          <TicketInfo>
            <AntdAvatar size='small'>{columnItem.content.estimation}</AntdAvatar>
          </TicketInfo>
          <TicketInfo>
            <AntdAvatar />
          </TicketInfo>
        </TicketInfoContainer>
      </Container>
    );
  }
);
