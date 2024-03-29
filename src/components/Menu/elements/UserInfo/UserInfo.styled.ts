import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  margin-left: 10px;
`;

export const Name = styled.span`
  margin-right: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.components.userInfo.name.font};
`;

export const Email = styled.div`
  color: ${({ theme }) => theme.components.userInfo.email.font};
`;
