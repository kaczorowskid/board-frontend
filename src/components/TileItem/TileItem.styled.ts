import { Button } from 'antd';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const TileContainer = styled.div`
  padding: 40px 30px 40px 30px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.background.tile};
  border-radius: 30px;
`;

export const Tile = styled.div`
  display: flex;
`;

export const PaginationButton = styled(Button)`
  min-width: 50px !important;
  color: black;
  border: none;
`;
