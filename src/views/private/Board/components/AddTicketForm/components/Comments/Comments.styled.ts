import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.semiNormal};
    margin-top: ${theme.spacing.semiNormal};
  `}
`;

export const CommentWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'avatar avatar-info date'
    '. comment comment';
  grid-template-rows: 30px auto;

  grid-template-columns: 40px auto auto;
`;

export const AvatarContainer = styled.div`
  grid-area: avatar;
`;

export const AvatarInfoContainer = styled.div`
  grid-area: avatar-info;
  font-weight: bold;
`;

export const AvatarDateContainer = styled.div`
  grid-area: date;
  font-weight: bold;
  text-align: end;
`;

export const CommentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-area: comment;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    padding-left: ${theme.spacing.smallest};
    border: 2px solid ${theme.views.board.commentsForm.border};
    border-radius: ${theme.borderRadius.smaller};
  `}
`;

export const DropdownContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.smallest};
`;
