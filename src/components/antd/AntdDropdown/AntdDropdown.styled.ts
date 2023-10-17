import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border.tile};
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.base};
  }
`;
