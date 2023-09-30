import { ButtonProps, ModalProps } from 'antd';
import { ReactNode } from 'react';

export interface AntdModalProps extends Omit<ModalProps, 'onClose'> {
  onClose?: ButtonProps['onClick'];
  onSumbit?: ButtonProps['onClick'];
  formId?: ButtonProps['form'];
  children: ReactNode;
}
