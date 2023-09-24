export interface GetDashboardRequest {
  user_id: string;
  date: string;
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
  calendar: {
    id: string;
    start_date: string;
    hour: string;
    note: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
  }[];
}
