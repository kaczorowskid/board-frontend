export interface GetFoldersWithPaginationRequest {
  user_id: string;
  limit: number;
  offset: number;
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

export interface CreateFolderRequest {
  user_id: string;
  name: string;
  description: string;
}

export interface CreateFolderResponse {
  id: string;
  name: string;
  description: string;
}
