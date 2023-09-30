import { Button } from 'antd';
import { CSSProperties } from 'react';
import styled from 'styled-components';

export const GridContainer = styled.div<{
  gridArea: CSSProperties['gridArea'];
}>`
  grid-area: ${({ gridArea }) => gridArea};
  background-color: white;
  border-radius: 30px;
  border: 3px solid #f2f2f2;
`;

export const Container = styled.div`
  padding-bottom: 10px;
  width: 100%;
  height: max-content;
`;

export const AllButton = styled(Button)`
  padding: 0;
  min-width: 0;
  gap: 10px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-weight: bold;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 10px 20px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Tile = styled.div`
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
