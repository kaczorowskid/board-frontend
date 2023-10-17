import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  width: 400px;
  height: 300px;
  border: 2px solid ${({ theme }) => theme.colors.border.boardColumn};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
