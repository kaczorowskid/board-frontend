import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const InfoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 400px;
    height: 300px;
    border: 2px solid ${theme.errors.fallbackComponent.border};
    border-radius: ${theme.borderRadius.normal};
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
