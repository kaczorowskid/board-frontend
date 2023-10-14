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

export const Title = styled.h1`
  margin-right: 40px;
`;
