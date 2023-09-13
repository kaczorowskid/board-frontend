import { forwardRef } from 'react';
import { Avatar, Dropdown, Tag } from 'antd';
import {
  CheckSquareOutlined,
  FieldTimeOutlined,
  MessageOutlined,
  UpOutlined
} from '@ant-design/icons';
import { DraggableItemProps } from './DraggableItem.type';
import {
  CommentsContainer,
  Container,
  Description,
  EpicsContainer,
  Title,
  IconContainer,
  TitleContainer,
  DatePrioContainer
} from './DraggableItem.styled';

export const DraggableItem = forwardRef<HTMLDivElement, DraggableItemProps>(
  (
    {
      columnItem: ticket,
      isDragging,
      openItem,
      ticketDropdownItems,
      ticketDropdownIcon,
      ...props
    },
    ref
  ) => {
    const handleOpenItem = () => {
      openItem?.(ticket.id);
    };

    return (
      <Container ref={ref} onClick={handleOpenItem} {...props}>
        <TitleContainer>
          <IconContainer>
            <CheckSquareOutlined />
            <Title>{ticket.title}</Title>
          </IconContainer>
          <Dropdown
            menu={{ items: ticketDropdownItems(ticket.id) }}
            trigger={['click']}
          >
            {ticketDropdownIcon}
          </Dropdown>
        </TitleContainer>
        <Description>{ticket.description}</Description>
        <EpicsContainer>
          {ticket.epics?.map((epic) => (
            <Tag key={epic} color='red'>
              {epic}
            </Tag>
          ))}
        </EpicsContainer>
        <DatePrioContainer>
          <IconContainer>
            <FieldTimeOutlined style={{ fontSize: '16px' }} />
            <span>{ticket.start}</span>
            <span>-</span>
            <span>{ticket.end}</span>
          </IconContainer>
          <IconContainer>
            <UpOutlined style={{ fontSize: '16px' }} />
            <span>{ticket.prio}</span>
          </IconContainer>
        </DatePrioContainer>
        <CommentsContainer>
          <Avatar.Group maxCount={2}>
            {ticket.comentatorsAvatars?.map(({ name, avatar }) => (
              <Avatar src={avatar}>{name}</Avatar>
            ))}
          </Avatar.Group>
          <MessageOutlined />
        </CommentsContainer>
      </Container>
    );
  }
);
