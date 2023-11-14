import styled from 'styled-components';
import { hello } from 'assets';

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  & :nth-child(1) {
    width: 25%;
    background-color: ${({ theme }) => theme.layout.auth.background.primary};
  }

  & :nth-child(2) {
    position: relative;
    width: 75%;
    background-image: url(${hello});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      background-color: ${({ theme }) =>
        theme.layout.auth.background.secondary};
      opacity: 0.8;
    }
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 25%;
  display: flex;
  justify-content: space-between;

  min-width: 400px;
  max-width: 700px;
  padding: ${({ theme }) => theme.gapp.large} ${({ theme }) => theme.gapp.small};
  background: none;
  background: ${({ theme }) => theme.layout.auth.background.base};
  border-radius: 15px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  transform: translate(-50%, -50%);
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;
