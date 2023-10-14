import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background.tile};
  padding: 10px 15px;
  border: 2px solid ${({ theme }) => theme.colors.border.boardColumn};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.font.base};
  font-size: 18px;
  font-weight: bold;
`;

export const TitleContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.font.base};
`;

export const DatePrioContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`;
