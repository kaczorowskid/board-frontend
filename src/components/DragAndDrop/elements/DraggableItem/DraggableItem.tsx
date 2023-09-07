import { forwardRef } from 'react';
import { Avatar, Tag } from 'antd';
import {
  CheckSquareOutlined,
  FieldTimeOutlined,
  MessageOutlined,
  MoreOutlined,
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
  ({ columnItem, isDragging, openItem, ...props }, ref) => {
    const handleOpenItem = () => {
      openItem?.(columnItem.id);
    };

    return (
      <Container ref={ref} onClick={handleOpenItem} {...props}>
        <TitleContainer>
          <IconContainer>
            <CheckSquareOutlined />
            <Title>{columnItem.title}</Title>
          </IconContainer>
          <MoreOutlined style={{ fontSize: '20px' }} />
        </TitleContainer>
        <Description>{columnItem.description}</Description>
        <EpicsContainer>
          {columnItem.epics?.map((epic) => (
            <Tag key={epic} color='red'>
              {epic}
            </Tag>
          ))}
        </EpicsContainer>
        <DatePrioContainer>
          <IconContainer>
            <FieldTimeOutlined style={{ fontSize: '16px' }} />
            <span>{columnItem.start}</span>
            <span>-</span>
            <span>{columnItem.end}</span>
          </IconContainer>
          <IconContainer>
            <UpOutlined style={{ fontSize: '16px' }} />
            <span>{columnItem.prio}</span>
          </IconContainer>
        </DatePrioContainer>
        <CommentsContainer>
          <Avatar.Group maxCount={2}>
            {columnItem.comentatorsAvatars?.map(({ name, avatar }) => (
              <Avatar src={avatar}>{name}</Avatar>
            ))}
          </Avatar.Group>
          <MessageOutlined />
        </CommentsContainer>
      </Container>
    );
  }
);
