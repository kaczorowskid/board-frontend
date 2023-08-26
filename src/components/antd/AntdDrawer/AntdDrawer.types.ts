import { ButtonProps, DrawerProps } from 'antd';
import { ReactNode } from 'react';

export interface AntdDrawerProps extends Omit<DrawerProps, 'onClose'> {
  onClose?: ButtonProps['onClick'];
  onSumbit?: ButtonProps['onClick'];
  children: ReactNode;
}
