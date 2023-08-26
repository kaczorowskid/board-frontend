export interface Content {
  code: string;
  title: string;
  description: string;
  epics?: string[];
  prio: string;
  start: string;
  end: string;
  comments: number;
  comentatorsAvatars?: { name: string; avatar: string }[];
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
