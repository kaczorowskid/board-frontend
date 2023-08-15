import { ButtonProps } from 'antd';

export interface TileItemProps {
  title: string;
  hasBorder?: boolean;
  hasBigTitle?: boolean;
  buttonName?: ButtonProps['name'];
  buttonProps?: ButtonProps;
  pagination?: boolean;
  onChangePagination?: (page: number) => void;
  children?: React.ReactNode;
}
