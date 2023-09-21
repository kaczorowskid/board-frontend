import styled, { css } from 'styled-components';

export const ItemsContainer = styled.div`
  width: 100%;

  display: grid;
  gap: 20px;
  grid-template-columns: 1.5fr 1.5fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'recent-tickets recent-tickets calendar'
    'recent-tickets recent-tickets calendar-info'
    'statisctic recent-boards calendar-info';
`;

const style = css`
  background-color: white;
  border-radius: 30px;
  border: 3px solid #f2f2f2;
`;

export const RecentTicketsContainer = styled.div`
  grid-area: recent-tickets;
  ${style}
`;

export const RecentBoardsContainer = styled.div`
  grid-area: recent-boards;
  ${style}
`;

export const RecentFoldersContainer = styled.div`
  grid-area: recent-folders;
  ${style}
`;

export const StatisticContainer = styled.div`
  grid-area: statisctic;
  ${style}
`;

export const CalendarContainer = styled.div`
  grid-area: calendar;
  ${style}
`;

export const CalendarInfoContainer = styled.div`
  grid-area: calendar-info;
  ${style}
`;
