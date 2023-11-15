import styled from 'styled-components';

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-areas:
    'recent-tickets recent-tickets calendar'
    'recent-tickets recent-tickets calendar-info'
    'statisctic recent-boards calendar-info';
  grid-template-rows: auto auto auto;
  grid-template-columns: 1.5fr 1.5fr 1fr;
  gap: 20px;
  width: 100%;
  height: calc(100% - 150px);
`;
