import { ButtonProps } from 'antd';
import { SearchProps } from 'antd/es/input';
import { ReactNode } from 'react';

export interface PageWrapperProps extends SearchProps {
  title: string;
  hasSearchbar?: boolean;
  buttonName?: ButtonProps['name'];
  buttonClick?: ButtonProps['onClick'];
  icon?: ReactNode;
  children: ReactNode;
}
