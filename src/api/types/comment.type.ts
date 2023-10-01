export interface CreateCommentRequest {
  text: string;
  ticket_id: string;
  user_id: string;
}

export interface CreateCommentResponse {
  id: string;
  text: string;
  ticket_id: string;
  updated_at: Date;
  created_at: Date;
}

export interface RemoveCommentRequest {
  id: string;
}

export interface RemoveCommentResponse {
  result: string;
}
