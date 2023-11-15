import styled, { css } from 'styled-components';

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    width: 40%;
    font-size: ${theme.fontSize.large};
    font-weight: bold;
    color: ${theme.views.user.font};
  `}
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
