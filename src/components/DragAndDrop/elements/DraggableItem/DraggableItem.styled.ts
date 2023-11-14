import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 15px;
  margin-top: 10px;
  background-color: ${({ theme }) =>
    theme.components.dragAndDrop.items.background};
  border: 2px solid ${({ theme }) => theme.components.dragAndDrop.items.border};
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.components.dragAndDrop.items.font};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.components.dragAndDrop.items.font};
`;

export const DatePrioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 12px;
`;
