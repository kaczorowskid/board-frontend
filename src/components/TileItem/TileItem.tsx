import { Button } from 'antd';
import { Header, Tile, TileContainer } from './TileItem.styled';
import { TileItemProps } from './TileItem.type';

export const TileItem = ({
  buttonName,
  onClick,
  buttonProps,
  additionButtons,
  children
}: TileItemProps) => (
  <TileContainer>
    <Header>
      {buttonName && (
        <Button onClick={onClick} {...buttonProps}>
          {buttonName}
        </Button>
      )}
      {additionButtons}
    </Header>
    <Tile>{children}</Tile>
  </TileContainer>
);
