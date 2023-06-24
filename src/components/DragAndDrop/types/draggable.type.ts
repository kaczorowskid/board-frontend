export interface Content {
  code: string;
  description: string;
  epics?: string[];
  type: 'BUG' | 'STORY';
  estimation: number | null;
}

export interface ColumnItem {
  id: string;
  content: Content;
}

export interface Column {
  columnId: string;
  columnName: string;
  columnItems: ColumnItem[];
}
