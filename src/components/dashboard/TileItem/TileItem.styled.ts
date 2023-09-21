import { Button } from 'antd';
import styled, { css } from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const TileContainer = styled.div<{ hasBorder?: boolean }>`
  ${({ hasBorder }) =>
    hasBorder
      ? css`
          border: 1px solid #f3f0f8;
          -webkit-box-shadow: 0px 0px 21px -21px rgba(0, 0, 0, 1);
          -moz-box-shadow: 0px 0px 21px -21px rgba(0, 0, 0, 1);
          box-shadow: 0px 0px 21px -21px rgba(0, 0, 0, 1);
        `
      : ''};
  border-radius: 30px;
  background-color: white;
  padding: 40px 30px 40px 30px;
`;

export const Tile = styled.div`
  display: flex;
  gap: 40px;
`;

export const PaginationButton = styled(Button)`
  min-width: 50px !important;
  border: none;
  color: black;
`;
