import styled, { css } from 'styled-components';

export const ItemsContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing.mini};
`;

export const CommentsContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.normal} ${theme.spacing.small};
    background-color: ${theme.views.board.commentsForm.background};
  `}
`;
