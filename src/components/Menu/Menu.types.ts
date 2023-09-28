import { ReactNode } from 'react';

export interface MenuProps {
  items: {
    name: string;
    icon: ReactNode;
    routing: string;
  }[];
}
