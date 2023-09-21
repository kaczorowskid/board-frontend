import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
  Header,
  PaginationButton,
  Tile,
  TileContainer
} from './TileItem.styled';
import { TileItemProps } from './TileItem.type';
import { Action } from './TileItem.enum';

export const TileItem = ({
  hasBorder,
  buttonName,
  onClick,
  buttonProps,
  pagination,
  onChangePagination,
  children
}: TileItemProps) => {
  const handlePagination = (action: Action) => {
    if (action === Action.NEXT) {
      onChangePagination?.(1);
    } else {
      onChangePagination?.(-1);
    }
  };

  return (
    <TileContainer hasBorder={hasBorder}>
      <Header>
        {buttonName && (
          <Button onClick={onClick} {...buttonProps}>
            {buttonName}
          </Button>
        )}
        {pagination && (
          <div>
            <PaginationButton
              onClick={() => handlePagination(Action.PREV)}
              type='link'
              icon={<LeftOutlined />}
            />
            <PaginationButton
              onClick={() => handlePagination(Action.NEXT)}
              type='link'
              icon={<RightOutlined />}
            />
          </div>
        )}
      </Header>
      <Tile>{children}</Tile>
    </TileContainer>
  );
};
