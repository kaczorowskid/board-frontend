import { ButtonProps, DrawerProps } from 'antd';
import { ReactNode } from 'react';

export interface AntdDrawerProps extends Omit<DrawerProps, 'onClose'> {
  hideSubmit?: boolean;
  onClose?: ButtonProps['onClick'];
  onSumbit?: ButtonProps['onClick'];
  formId?: ButtonProps['form'];
  children: ReactNode;
}
