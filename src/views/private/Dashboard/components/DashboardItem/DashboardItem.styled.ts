import { Button } from 'antd';
import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

export const GridContainer = styled.div<{
  gridArea: CSSProperties['gridArea'];
}>`
  ${({ gridArea, theme }) => css`
    grid-area: ${gridArea};
    background-color: ${theme.views.dashboard.dashboardItem.background};
    border-radius: ${theme.borderRadius.large};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: max-content;
    padding-bottom: ${theme.spacing.smallest};
  `}
`;

export const AllButton = styled(Button)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row-reverse;
    gap: ${theme.spacing.smallest};
    align-items: center;
    min-width: 0;
    padding: 0;
    font-weight: bold;
  `}
`;

export const Header = styled.div`
  ${({ theme: { spacing, views } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${spacing.semiNormal} ${spacing.semiNormal} ${spacing.smallest}
      ${spacing.semiNormal};
    color: ${views.dashboard.dashboardItem.font};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.large};
    font-weight: bold;
  `}
`;

export const Tile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 ${theme.spacing.smallest} 0 ${theme.spacing.smallest};
  `}
`;
