import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const CommentWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'avatar avatar-info'
    '. comment';
  grid-template-rows: 20px auto;

  grid-template-columns: 40px auto;
`;

export const AvatarContainer = styled.div`
  grid-area: avatar;
`;

export const AvatarInfoContainer = styled.div`
  grid-area: avatar-info;
  font-weight: bold;
`;

export const CommentContainer = styled.div`
  display: flex;
  grid-area: comment;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding-left: 10px;
  border: 2px solid ${({ theme }) => theme.colors.border.tile};
  border-radius: 10px;
`;

export const DropdownContainer = styled.div`
  padding: 0 10px;
`;
