import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 20px 0 20px;
  border-radius: 30px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.background.tile};
  color: ${({ theme }) => theme.colors.font.base};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Title = styled.h1`
  margin-left: 20px;
  margin-right: 40px;
`;
