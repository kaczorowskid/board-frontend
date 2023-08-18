export interface GetAllTablesRequest {
  user_id: string;
}

export interface GetAllTablesResponse {
  id: string;
  image?: string;
  name: string;
  favorite: boolean;
  team: boolean;
}

export interface GetTablesWithPaginationRequest {
  user_id: string;
  folder_id?: string;
  limit: number;
  offset: number;
  search_value: string;
}

export interface GetTablesWithPaginationResponse {
  count: number;
  data: {
    id: string;
    image: string;
    name: string;
    favorite: boolean;
    team: boolean;
  }[];
}

export interface CreateTableRequest {
  name: string;
  description: string;
  favorite: boolean;
  user_id: string;
}

export interface CreateTableResponse {
  id: string;
  name: string;
  description: string;
  favorite: boolean;
  user_id: string;
}
