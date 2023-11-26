import { forwardRef } from 'react';
import { AntdDropdown } from 'components/antd';
import { IconTag } from 'components/IconTag';
import { EditOutlined } from '@ant-design/icons';
import { DraggableItemProps } from './DraggableItem.type';
import {
  Container,
  Title,
  TitleContainer,
  DatePrioContainer
} from './DraggableItem.styled';
import { IconsActivity } from './components';

export const DraggableItem = forwardRef<HTMLDivElement, DraggableItemProps>(
  (
    { columnItem: ticket, isDragging, openItem, ticketDropdownItems, ...props },
    ref
  ) => {
    const handleOpenItem = (): void => {
      openItem?.(ticket.id);
    };

    return (
      <Container ref={ref} onClick={handleOpenItem} {...props}>
        <TitleContainer>
          <Title>{ticket.title}</Title>
          <AntdDropdown menu={{ items: ticketDropdownItems(ticket.id) }}>
            <EditOutlined />
          </AntdDropdown>
        </TitleContainer>
        <DatePrioContainer>
          <IconsActivity
            description={ticket.description}
            comments={ticket.comments.length}
          />
          {ticket.prio && <IconTag prio={ticket.prio} />}
        </DatePrioContainer>
      </Container>
    );
  }
);
