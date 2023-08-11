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
