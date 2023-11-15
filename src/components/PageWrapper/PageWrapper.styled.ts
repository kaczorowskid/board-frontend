import styled, { css } from 'styled-components';

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0 ${theme.spacing.semiNormal} 0 ${theme.spacing.semiNormal};
    margin-bottom: ${theme.spacing.semiLarge};
    color: ${theme.components.pageWrapper.font};
    background-color: ${theme.components.pageWrapper.background};
    border-radius: ${theme.borderRadius.large};
  `}
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
  ${({ theme }) => css`
    margin-right: ${theme.spacing.large};
    margin-left: ${theme.spacing.semiNormal};
  `}
`;
