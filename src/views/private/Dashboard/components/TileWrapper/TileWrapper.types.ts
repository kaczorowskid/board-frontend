import { ReactNode } from 'react';

export interface TileWrapperProps {
  title?: string;
  direction?: 'horizontal' | 'vertical';
  children: ReactNode;
}
