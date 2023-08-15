export interface GetAllFoldersRequest {
  user_id: string;
}

export interface GetAllFoldersResponse {
  id: string;
  name: string;
  description: string;
  tables_count: number;
  user_id?: string;
}

export interface GetFoldersWithPaginationRequest {
  user_id: string;
  take: number;
  skip: number;
  search_value: string;
}

export interface GetFoldersWithPaginationResponse {
  count: number;
  data: {
    id: string;
    name: string;
    description: string;
    user_id: boolean;
    tables_count: number;
  }[];
}
