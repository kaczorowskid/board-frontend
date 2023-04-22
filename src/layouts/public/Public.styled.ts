import styled from 'styled-components';
import { hello } from 'assets';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  & :nth-child(1) {
    width: 25%;
    background-color: #fff;
  }

  & :nth-child(2) {
    position: relative;
    width: 75%;
    background-image: url(${hello});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #5d7df3;
      opacity: 0.8;
    }
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);

  min-width: 400px;
  max-width: 700px;
  background: none;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  background: white;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  padding: 24px 12px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;
