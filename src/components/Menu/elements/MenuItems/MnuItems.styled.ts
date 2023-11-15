import styled, { css } from 'styled-components';
import { CSSProperties } from 'react';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.semiNormal};
    color: ${theme.components.menu.font};
  `}
`;

export const Item = styled.div<{
  isClicked?: boolean;
  color?: CSSProperties['color'];
}>`
  ${({ isClicked, color, theme }) => css`
    display: flex;
    align-items: center;
    height: 70px;
    padding: ${theme.spacing.micro} ${theme.spacing.smallest};
    margin-top: ${theme.spacing.semiNormal};
    color: ${color};
    cursor: pointer;
    background-color: ${isClicked && theme.components.menu.menuItem.active};
    border-radius: ${theme.borderRadius.smaller};

    &:hover {
      background-color: ${theme.components.menu.menuItem.hover};
      transition: 0.5s all;
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    .anticon {
      svg {
        font-size: ${theme.spacing.semiLarge};
      }
    }
  `}
`;

export const ItemName = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.smallest};
    font-size: ${theme.fontSize.large};
  `}
`;
