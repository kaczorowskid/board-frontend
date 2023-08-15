import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  color: white;
`;

export const Item = styled.div<{ isClicked?: boolean }>`
  margin-top: 20px;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ isClicked }) => isClicked && '#425c9d'};

  &:hover {
    background-color: #425c9d;
    transition: 0.5s all;
  }
`;

export const Icon = styled.div`
  .anticon {
    svg {
      font-size: 30px;
    }
  }
`;

export const ItemName = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;
