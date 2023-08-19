import { ButtonProps, ModalProps } from 'antd';

export interface AntdModalProps extends ModalProps {
  onClose?: ButtonProps['onClick'];
  onSumbit?: ButtonProps['onClick'];
}
