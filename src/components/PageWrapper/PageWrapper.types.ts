import { SearchProps } from 'antd/es/input';
import { ReactNode } from 'react';

export interface PageWrapperProps extends SearchProps {
  title: string;
  hasSearchbar?: boolean;
  children: ReactNode;
}
