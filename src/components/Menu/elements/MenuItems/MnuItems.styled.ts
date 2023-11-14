import styled from 'styled-components';
import { CSSProperties } from 'react';

export const Container = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.components.menu.font};
`;

export const Item = styled.div<{
  isClicked?: boolean;
  color?: CSSProperties['color'];
}>`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 5px 10px;
  margin-top: 20px;
  color: ${({ color }) => color};
  cursor: pointer;
  background-color: ${({ isClicked, theme }) =>
    isClicked && theme.components.menu.menuItem.active};
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.components.menu.menuItem.hover};
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
