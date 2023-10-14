import styled from 'styled-components';

export const SignCell = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border: 3px solid ${({ theme }) => theme.colors.background.blueberry};
`;
