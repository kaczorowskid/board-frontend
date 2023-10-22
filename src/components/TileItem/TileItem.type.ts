import { ButtonProps } from 'antd';
import { ReactNode } from 'react';

export interface TileItemProps {
  buttonName?: ButtonProps['name'];
  onClick?: ButtonProps['onClick'];
  buttonProps?: ButtonProps;
  additionButtons?: ReactNode;
  children?: React.ReactNode;
}
