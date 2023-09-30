import { CSSProperties, ReactNode } from 'react';

export interface TileItemProps {
  title?: string;
  gridArea: CSSProperties['gridArea'];
  component: ReactNode;
}
