export interface GetBoardRequest {
  id: string;
}

export interface GetBoardResponse {
  id: string;
  title: string;
  user_id: string;
  columns: {
    id: string;
    title: string;
    board_id: string;
    tickets: {
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
    }[];
  }[];
}

export interface UpdateBoardRequest {
  id: string;
  title: string;
  columns: {
    id: string;
    title: string;
    board_id: string;
    tickets: {
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
    }[];
  }[];
}

export interface UpdateBoardResponse {
  result: string;
}

export interface CreateColumnRequest {
  title: string;
  board_id: string;
}

export interface CreateColumnResponse {
  id: string;
  title: string;
  board_id: string;
}

export interface RemoveColumnRequest {
  id: string;
}

export interface RemoveColumnResponse {
  result: string;
}

export interface CreateTicketRequest {
  title: string;
  description: string;
  prio: string;
  column_id: string;
  user_id: string;
}

export interface CreateTicketResponse {
  result: string;
}

export interface GetBoardsWithPaginationRequest {
  user_id: string;
  limit: number;
  offset: number;
  search_value: string;
}

export interface GetBoardsWithPaginationResponse {
  count: number;
  data: {
    id: string;
    title: string;
    user_id: string;
    columns: {
      id: string;
      title: string;
      board_id: string;
      tickets: {
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
      }[];
    }[];
  }[];
}

export interface CreateBoardRequest {
  title: string;
  description: string;
  user_id: string;
}

export interface CreateBoardResponse {
  result: {
    id: string;
    title: string;
    user_id: string;
    created_ta: Date;
    updated_at: Date;
  };
}

export interface EditBoardRequest {
  id: string;
  title: string;
  description: string;
}

export interface EditBoardResponse {
  result: string;
}

export interface RemoveBoardRequest {
  id: string;
}

export interface RemoveBoardResponse {
  result: string;
}

export interface EditTicketRequest {
  id: string;
  title: string;
  description: string;
  prio: string;
  start: string;
  end: string;
}

export interface EditTicketResponse {
  result: string;
}

export interface RemoveTicketRequest {
  id: string;
}

export interface RemoveTicketResponse {
  result: string;
}

export interface GetTicketRequest {
  id: string;
}

export interface GetTicketResponse {
  id: string;
  title: string;
  description: string;
  prio: string;
  start: string;
  end: string;
  order: number;
  column_id: string;
  user_id: string;
}

export interface GetColumnRequest {
  id: string;
}

export interface GetColumnResponse {
  id: string;
  title: string;
  board_id: string;
}

export interface EditColumnRequest {
  id: string;
  title: string;
}

export interface EditColumnResponse {
  result: string;
}
