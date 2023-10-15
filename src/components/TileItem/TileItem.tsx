import { Button } from 'antd';
import { Header, Tile, TileContainer } from './TileItem.styled';
import { TileItemProps } from './TileItem.type';

export const TileItem = ({
  hasBorder,
  buttonName,
  onClick,
  buttonProps,
  additionButtons,
  children
}: TileItemProps) => (
  <TileContainer hasBorder={hasBorder}>
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
