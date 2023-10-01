import { forwardRef } from 'react';
import { Dropdown } from 'antd';
import { DraggableItemProps } from './DraggableItem.type';
import {
  Container,
  Title,
  TitleContainer,
  DatePrioContainer
} from './DraggableItem.styled';
import { IconTag } from './components/IconTag/IconTag';
import { IconsActivity } from './components';

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
          <Title>{ticket.title}</Title>
          <Dropdown
            menu={{ items: ticketDropdownItems(ticket.id) }}
            trigger={['click']}
          >
            {ticketDropdownIcon}
          </Dropdown>
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
