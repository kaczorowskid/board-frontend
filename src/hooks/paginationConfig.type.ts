import { ListQuery } from 'types';

interface UsePaginationConfig {
  offset: number;
  limit: number;
  searchValue?: string;
}

export const usePaginationConfig = (listQuery: ListQuery): UsePaginationConfig => {
  const { searchValue } = listQuery;
  const offset = listQuery.pagination.current * listQuery.pagination.pageSize - listQuery.pagination.pageSize;
  const limit = listQuery.pagination.pageSize;

  return {
    offset,
    limit,
    searchValue
  };
};
