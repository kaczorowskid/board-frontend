import styled from 'styled-components';

export const SignCell = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  border: 3px solid ${({ theme }) => theme.views.calendar.border};
`;
