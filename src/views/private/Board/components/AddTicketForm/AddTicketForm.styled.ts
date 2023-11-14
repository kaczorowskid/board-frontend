import styled from 'styled-components';

export const ItemsContainer = styled.div`
  padding-top: 8px;
`;

export const CommentsContainer = styled.div`
  padding: 25px 15px;
  background-color: ${({ theme }) => theme.views.board.commentsForm.background};
`;
