import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  border-radius: 10px;
  background-color: white;
  padding: 20px 15px;
`;

export const Title = styled.div`
  color: #172b4d;
  margin-bottom: 16px;
`;

export const EpicsContainer = styled.div`
  margin-bottom: 16px;
`;

export const TicketInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 50% 10% 10%;

  * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TicketInfo = styled.div`
  color: black;
  font-size: 12px;
`;
