import styled from 'styled-components';

export const Container = styled.div<{ hasGap?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ hasGap }) => (hasGap ? '10px' : '')};
  font-size: 15px;
`;
