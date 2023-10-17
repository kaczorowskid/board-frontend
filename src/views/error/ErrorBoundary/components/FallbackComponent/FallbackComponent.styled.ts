import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  width: 300px;
  height: 200px;
  border: ${({ theme }) => theme.colors.border.tile};
`;
