import styled from 'styled-components';

export const ItemsContainer = styled.div`
  padding-top: 8px;
`;

export const CommentsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.comments};
  padding: 25px 15px;
`;
