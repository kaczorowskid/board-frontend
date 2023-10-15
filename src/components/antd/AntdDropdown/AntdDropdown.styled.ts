import styled from 'styled-components';

export const Container = styled.div`
  min-width: 40px;
  min-height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border.tile};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.base};
  }
`;
