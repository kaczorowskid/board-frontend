import { ButtonProps } from 'antd';

export interface TileItemProps {
  hasBorder?: boolean;
  buttonName?: ButtonProps['name'];
  onClick?: ButtonProps['onClick'];
  buttonProps?: ButtonProps;
  pagination?: boolean;
  onChangePagination?: (page: number) => void;
  children?: React.ReactNode;
}
