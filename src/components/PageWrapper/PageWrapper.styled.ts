import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 20px 0 20px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.components.pageWrapper.font};
  background-color: ${({ theme }) => theme.components.pageWrapper.background};
  border-radius: 30px;
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
  margin-right: 40px;
  margin-left: 20px;
`;
