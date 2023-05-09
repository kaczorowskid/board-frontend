export interface Content {
  code: string;
  name: string;
  epics?: string[];
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
