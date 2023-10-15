import { DropdownProps } from 'antd';
import { ReactNode } from 'react';

export interface AntdDropdownProps extends DropdownProps {
  children: ReactNode;
}
