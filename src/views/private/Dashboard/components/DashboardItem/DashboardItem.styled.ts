import { Button } from 'antd';
import { CSSProperties } from 'react';
import styled from 'styled-components';

export const GridContainer = styled.div<{
  gridArea: CSSProperties['gridArea'];
}>`
  grid-area: ${({ gridArea }) => gridArea};
  background-color: ${({ theme }) => theme.colors.background.tile};
  border-radius: 30px;
`;

export const Container = styled.div`
  width: 100%;
  height: max-content;
  padding-bottom: 10px;
`;

export const AllButton = styled(Button)`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 0;
  font-weight: bold;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
  color: ${({ theme }) => theme.colors.font.base};
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 10px 0 10px;
`;
