export interface GetBoardRequest {
  id: string;
}

export interface GetBoardResponse {
  id: string;
  title: string;
  description: string;
  user_id: string;
  columns: {
    id: string;
    title: string;
    board_id: string;
    tickets: {
      id: string;
      title: string;
      description: string;
      prio: 'high' | 'medium' | 'low';
      order: number;
      column_id: string;
      user_id: string;
      comments: {
        id: string;
        text: string;
        ticket_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      }[];
    }[];
  }[];
}

export interface UpdateBoardRequest {
  id: string;
  title: string;
  description: string;
  user_id: string;
  columns: {
    id: string;
    title: string;
    board_id: string;
    tickets: {
      id: string;
      title: string;
      description: string;
      prio: 'high' | 'medium' | 'low';
      order: number;
      column_id: string;
      user_id: string;
      comments: {
        id: string;
        text: string;
        ticket_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      }[];
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
    owner_id: string;
    columns: {
      id: string;
      title: string;
      board_id: string;
      tickets: {
        id: string;
        title: string;
        description: string;
        prio: string;
        order: number;
        column_id: string;
        user_id: string;
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
  order: number;
  column_id: string;
  user_id: string;
  comments: {
    id: string;
    text: string;
    ticket_id: string;
    created_at: Date;
    updated_at: Date;
    user: {
      id: string;
      email: string;
      is_active: boolean;
      name: string;
      created_at: Date;
      updated_at: Date;
    };
  }[];
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

export interface ConfirmShareTokenRequest {
  token: string;
  user_id: string;
}

export interface ConfirmShareTokenResponse {
  result: string;
}

export interface CreateShareTokenRequest {
  board_id: string;
}

export interface CreateShareTokenResponse {
  result: string;
}
