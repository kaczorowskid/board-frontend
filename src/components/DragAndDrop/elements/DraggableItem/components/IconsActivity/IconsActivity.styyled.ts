import styled from 'styled-components';

export const Container = styled.div<{ hasGap?: boolean }>`
  display: flex;
  gap: ${({ hasGap }) => (hasGap ? '10px' : '')};
  align-items: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.font.base};
`;
