import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.mini};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.views.common.font};
    text-align: center;
  `}
`;

export const HintContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.views.common.font};
  `}
`;
