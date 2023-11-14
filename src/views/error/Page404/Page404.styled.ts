import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 48px;
  color: ${({ theme }) => theme.errors.page404.font};
`;
