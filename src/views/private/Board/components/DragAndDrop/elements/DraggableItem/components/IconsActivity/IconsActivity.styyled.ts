import styled, { css } from 'styled-components';

export const Container = styled.div<{ hasGap?: boolean }>`
  ${({ hasGap, theme }) => css`
    display: flex;
    gap: ${hasGap ? theme.spacing.smallest : ''};
    align-items: center;
    font-size: ${theme.fontSize.normal};
    color: ${theme.components.iconsActivity.font};
  `}
`;
