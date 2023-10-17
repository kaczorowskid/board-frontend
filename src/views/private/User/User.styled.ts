import styled from 'styled-components';

export const InfoContainer = styled.div`
  box-sizing: border-box;
  width: 40%;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font.base};
`;

export const FormContainer = styled.div`
  width: 60%;
`;

export const ThemeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
