export interface GetDashboardRequest {
  user_id: string;
}

export interface GetDashboardResponse {
  recentBoards: {
    data: {
      id: string;
      title: string;
      description: string;
      user_id: string;
      created_at: Date;
      updated_at: Date;
    }[];
    count: number;
  };
  recentTickets: {
    data: {
      id: string;
      title: string;
      description: string;
      prio: string;
      start: string;
      end: string;
      order: number;
      column_id: string;
      user_id: string;
      created_at: Date;
      updated_at: Date;
    }[];
    count: number;
  };
}
