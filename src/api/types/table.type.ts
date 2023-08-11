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
  folder_id: string;
  take: number;
  skip: number;
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
