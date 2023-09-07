export interface Ticket {
  id: string;
  code: string;
  title: string;
  description: string;
  epics?: string[];
  prio: string;
  start: string;
  end: string;
  order: number;
  comments: number;
  comentatorsAvatars?: { name: string; avatar: string }[];
  column_id: string;
}

export interface Column {
  id: string;
  title: string;
  board_id: string;
  tickets: Ticket[];
}

export interface Board {
  id: string;
  title: string;
  user_id: string;
  columns: Column[];
}
