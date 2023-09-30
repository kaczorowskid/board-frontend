import styled from 'styled-components';

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
