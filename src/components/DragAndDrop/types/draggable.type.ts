export interface Comment {
  id: string;
  text: string;
  ticket_id: string;
  user_id: string;
  // created_at: Date;
  // updated_at: Date;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  prio: 'high' | 'medium' | 'low';
  order: number;
  column_id: string;
  user_id: string;
  comments: Comment[];
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
  description: string;
  user_id: string;
  columns: Column[];
}
