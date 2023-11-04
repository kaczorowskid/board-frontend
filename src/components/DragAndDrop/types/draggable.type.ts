export type Prio = 'low' | 'medium' | 'high';

export interface Comment {
  id: string;
  text: string;
  ticket_id: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  prio: Prio;
  order: number;
  column_id: string;
  user_id: string;
  comments: Comment[];
  created_at: Date;
  updated_at: Date;
}

export interface Column {
  id: string;
  title: string;
  board_id: string;
  tickets: Ticket[];
  created_at: Date;
  updated_at: Date;
}

export interface Board {
  id: string;
  title: string;
  description: string;
  user_id: string;
  columns: Column[];
  created_at: Date;
  updated_at: Date;
}
