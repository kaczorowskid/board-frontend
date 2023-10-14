import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommentWrapper = styled.div`
  display: grid;

  grid-template-columns: 40px auto;
  grid-template-rows: 20px auto;
  grid-template-areas:
    'avatar avatar-info'
    '. comment';
`;

export const AvatarContainer = styled.div`
  grid-area: avatar;
`;

export const AvatarInfoContainer = styled.div`
  grid-area: avatar-info;
  font-weight: bold;
`;

export const CommentContainer = styled.div`
  grid-area: comment;
  border: 2px solid ${({ theme }) => theme.colors.border.tile};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  max-width: 100%;
`;

export const DropdownContainer = styled.div`
  padding: 0 10px;
`;
