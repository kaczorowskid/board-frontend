import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  border-radius: 10px;
  /* background-color: #ebecf0; */
  background-color: white;
  padding: 10px 15px;
  border: 2px solid gray;
`;

export const Title = styled.div`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 13px;
  margin-bottom: 16px;
`;

export const EpicsContainer = styled.div`
  margin-bottom: 16px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & :nth-child(2) {
    margin-left: 6px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DatePrioContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`;

export const ItemsContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentsContainer = styled.div`
  border-top: 2px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
`;

// /

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
