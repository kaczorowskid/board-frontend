import { ReactNode, CSSProperties } from 'react';

export interface MenuItemProps {
  items: {
    name: string;
    icon: ReactNode;
    routing: string;
    color?: CSSProperties['color'];
    onClick?: () => void;
  }[];
}
