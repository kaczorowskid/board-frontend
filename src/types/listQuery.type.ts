export interface ListQuery {
  searchValue?: string;
  pagination: {
    current: number;
    pageSize: number;
  };
}
