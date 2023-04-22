import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 12px;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #5d7df3;
`;

export const HintContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: #5d7df3;
`;
