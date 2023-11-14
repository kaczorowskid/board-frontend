import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* padding: ${({ theme }) => theme.gapp.small}; */
  padding: 8px;
`;

export const Title = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.views.common.font};
  text-align: center;
`;

export const HintContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.views.common.font};
`;
