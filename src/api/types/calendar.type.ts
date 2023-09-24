export interface GetCalendarRequest {
  user_id: string;
  date: string;
}

export interface GetCalendarResponse {
  id: string;
  start_date: Date;
  hour: string;
  note: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateNoteRequest {
  user_id: string;
  start_date: string;
  hour: string;
  note: string;
}

export interface CreateNoteResponse {
  result: {
    id: string;
    start_date: Date;
    hour: string;
    note: string;
    user_id: string;
    updated_at: Date;
    created_at: Date;
  };
}

export interface EditNoteRequest {
  id: string;
  start_date: string;
  hour: string;
  note: string;
}

export interface EditNoteResponse {
  result: string;
}

export interface GetNotesByDateRequest {
  user_id: string;
  date: string | null;
}

export interface GetNotesByDateResponse {
  id: string;
  start_date: Date;
  hour: string;
  note: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface GetNoteRequest {
  id: string;
}

export interface GetNoteResponse {
  id: string;
  start_date: Date;
  hour: string;
  note: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface RemoveNoteRequest {
  id: string;
}

export interface RemoveNoteResponse {
  result: string;
}
