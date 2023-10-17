import styled from 'styled-components';

export const InfoContainer = styled.div`
  box-sizing: border-box;
  width: 40%;
  color: ${({ theme }) => theme.colors.font.base};
  font-size: 20px;
  font-weight: bold;
`;

export const FormContainer = styled.div`
  width: 60%;
`;
