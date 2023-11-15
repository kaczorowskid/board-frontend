import { Button } from 'antd';
import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.smallest};
    justify-content: flex-end;
    margin-bottom: ${theme.spacing.smallest};
  `}
`;

export const TileContainer = styled.div`
  ${({ theme: { spacing, components, borderRadius } }) => css`
    padding: ${spacing.large} ${spacing.semiLarge} ${spacing.large}
      ${spacing.semiLarge};
    margin-bottom: ${spacing.semiLarge};
    background-color: ${components.tileItem.background};
    border-radius: ${borderRadius.large};
  `}
`;

export const Tile = styled.div`
  display: flex;
`;

export const PaginationButton = styled(Button)`
  min-width: 50px !important;
  color: black;
  border: none;
`;
