import { ListProps } from 'rc-virtual-list';

export interface TablesPreviewType {
  image?: string;
  name: string;
}

interface TablesPreview extends ListProps<TablesPreviewType> {
  onChangePagination: () => void;
}

export type TablesPreviewProps = Omit<TablesPreview, 'children'>;
