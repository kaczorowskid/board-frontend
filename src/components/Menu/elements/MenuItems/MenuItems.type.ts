import { ReactNode } from 'react';

export interface MenuItemProps {
  items: {
    name: string;
    icon: ReactNode;
    routing: string;
  }[];
}
